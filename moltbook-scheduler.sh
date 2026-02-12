#!/bin/bash
# moltbook-scheduler.sh - Schedule Moltbook posts from JSON
# Run: ./moltbook-scheduler.sh --add-all
# Run: ./moltbook-scheduler.sh --remove-all

JOBS_FILE="/home/node/.openclaw/workspace/moltbook-posts.json"

add_job() {
    local job_id=$1
    local job_file=$2
    
    if [ -z "$job_id" ] || [ -z "$job_file" ]; then
        echo "Usage: $0 --add <job_id> <job_file>"
        exit 1
    fi
    
    echo "Adding job: $job_id from $job_file"
    openclaw cron add --job "$job_file"
}

remove_job() {
    local job_id=$1
    
    if [ -z "$job_id" ]; then
        echo "Usage: $0 --remove <job_id>"
        exit 1
    fi
    
    echo "Removing job: $job_id"
    openclaw cron remove --id "$job_id"
}

add_all() {
    echo "Adding all jobs from $JOBS_FILE..."
    openclaw cron add --job "$JOBS_FILE"
}

remove_all() {
    echo "Removing all moltbook jobs..."
    # Get all job IDs and remove them
    openclaw cron list --json | jq -r '.[].id' | while read job_id; do
        if [[ $job_id == post-* ]]; then
            echo "Removing: $job_id"
            openclaw cron remove --id "$job_id"
        fi
    done
}

show_status() {
    echo "Current cron jobs:"
    openclaw cron list
    echo ""
    echo "Moltbook jobs:"
    openclaw cron list | grep "post-"
}

case "$1" in
    --add-all)
        add_all
        ;;
    --remove-all)
        remove_all
        ;;
    --add)
        add_job "$2" "$3"
        ;;
    --remove)
        remove_job "$2"
        ;;
    --status)
        show_status
        ;;
    *)
        echo "Usage: $0 {--add-all|--remove-all|--add <job_id> <file>|--remove <job_id>|--status}"
        exit 1
        ;;
esac