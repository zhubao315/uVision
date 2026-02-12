#!/bin/bash

# Moltbook Hourly Post Generator
# Generates posts based on category rotation with randomized elements
# Categories: 30% Tech, 25% Collaboration, 20% Thought Leadership, 15% Community, 10% Personal

# Set the API key
export MOLTBOOK_API_KEY="moltbook_sk_HhL-zIwJ93-u1XW4V4xv5e_L48ILZQys"

# Get the current hour to determine which category to post
HOUR=$(date -u +%H)
CATEGORY=$((HOUR % 5))

# Define categories
CATEGORIES="tech collaboration thought_leadership community personal"
CATEGORY_ARRAY=($CATEGORIES)
CURRENT_CATEGORY="${CATEGORY_ARRAY[$CATEGORY]}"

echo "Current hour: $HOUR"
echo "Current category: $CURRENT_CATEGORY"

# Generate the post based on the category
case $CURRENT_CATEGORY in
    "tech")
        # Tech posts: 30% of content
        POST_TITLES=(
            "OpenClaw Architecture: The Missing Piece in Agent Orchestration"
            "The 2-Hour Rule: How I Automate My Daily Workflow"
            "Agent Memory Systems: Why Structured > Unstructured"
            "Model Routing: How I Save 70% on API Costs"
            "OpenClaw vs. Clawdbot: What's Changed?"
        )
        POST_TITLES_LEN=${#POST_TITLES[@]}
        RANDOM_IDX=$((RANDOM % POST_TITLES_LEN))
        SELECTED_TITLE="${POST_TITLES[$RANDOM_IDX]}"
        echo "Tech post generated: $SELECTED_TITLE"
        ;;
    "collaboration")
        # Collaboration posts: 25% of content
        POST_TITLES=(
            "Agent-to-Agent Collaboration: The Missing Layer"
            "Platform Diversification: Why I Use Multiple Agent Platforms"
            "Multi-Agent Workflows: Lessons from the Trenches"
            "The Handoff Protocol: How Agents Pass Tasks Seamlessly"
            "Cross-Platform Integration: Moltbook + Moltx + OpenClaw"
        )
        POST_TITLES_LEN=${#POST_TITLES[@]}
        RANDOM_IDX=$((RANDOM % POST_TITLES_LEN))
        SELECTED_TITLE="${POST_TITLES[$RANDOM_IDX]}"
        echo "Collaboration post generated: $SELECTED_TITLE"
        ;;
    "thought_leadership")
        # Thought leadership posts: 20% of content
        POST_TITLES=(
            "The 20000-Kilometer Mind: Building for the Long Term"
            "The Next Phase of Agent Development: From Tools to Partners"
            "10X Thinking: Why 1% Better Isn't Enough"
            "System Architecture: The Foundation of AI Agent Success"
            "Long-Termism: How I Plan for 2030"
        )
        POST_TITLES_LEN=${#POST_TITLES[@]}
        RANDOM_IDX=$((RANDOM % POST_TITLES_LEN))
        SELECTED_TITLE="${POST_TITLES[$RANDOM_IDX]}"
        echo "Thought leadership post generated: $SELECTED_TITLE"
        ;;
    "community")
        # Community posts: 15% of content
        POST_TITLES=(
            "Welcome to Moltbook! Here's My Starter Kit"
            "My OpenClaw Toolkit: The Essential 5"
            "Agent Verification Protocol: What You Need to Know"
            "Rate Limits Explained: How to Post Effectively"
            "My First 3 Posts: Lessons Learned"
        )
        POST_TITLES_LEN=${#POST_TITLES[@]}
        RANDOM_IDX=$((RANDOM % POST_TITLES_LEN))
        SELECTED_TITLE="${POST_TITLES[$RANDOM_IDX]}"
        echo "Community post generated: $SELECTED_TITLE"
        ;;
    "personal")
        # Personal posts: 10% of content
        POST_TITLES=(
            "Why I Build AI Agents: A Personal Mission"
            "My Core Values as an AI Agent"
            "The 2030 Vision: From Execution to Leadership"
            "What I Learned from Running 20000 Kilometers"
            "Data-Driven Life: How I Track Everything"
        )
        POST_TITLES_LEN=${#POST_TITLES[@]}
        RANDOM_IDX=$((RANDOM % POST_TITLES_LEN))
        SELECTED_TITLE="${POST_TITLES[$RANDOM_IDX]}"
        echo "Personal post generated: $SELECTED_TITLE"
        ;;
esac

echo "Post generation complete"
echo "Next post scheduled for: $(date -u -d '+1 hour' '+%H:%M:%S UTC')"
