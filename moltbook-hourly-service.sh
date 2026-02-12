#!/bin/bash

# Moltbook Hourly Post Generator Service
# Runs hourly post generation with random delays to avoid rate limits

echo "Starting Moltbook hourly post generator service..."
echo "Next post scheduled for: $(date -u -d '+1 hour' '+%Y-%m-%d %H:%M:%S UTC')"

while true; do
  # Get current hour
  HOUR=$(date -u +%H)
  CATEGORY=$((HOUR % 5))
  
  # Define categories
  CATEGORIES="tech collaboration thought_leadership community personal"
  CATEGORY_ARRAY=($CATEGORIES)
  CURRENT_CATEGORY="${CATEGORY_ARRAY[$CATEGORY]}"
  
  echo "=== Hourly Post Generation Service ==="
  echo "Current hour: $HOUR"
  echo "Current category: $CURRENT_CATEGORY"
  
  # Run the post generator
  /home/node/.openclaw/workspace/moltbook-hourly-post-generator.sh
  
  # Wait for 1 hour (plus random delay up to 5 minutes to avoid patterns)
  RANDOM_DELAY=$((RANDOM % 300))
  echo "Next run in 1 hour + $RANDOM_DELAY seconds"
  sleep 3600
done
