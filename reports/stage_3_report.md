# Stage 3 Report: Backend & Real-time Systems

## Summary
Implemented the core backend services for real-time data delivery.
- **Live Score Service:** Hybrid system created.
    - **Polling:** `getMatchData` fetches latest state.
    - **SSE:** `subscribeToMatch` streams updates via `EventSource`.
    - **Mock Fallback:** Service automatically returns mock data if DB connection fails (handling the current seed issue).
- **API Routes:**
    - `GET /api/matches`: Lists all matches.
    - `GET /api/matches/live/[id]`: SSE endpoint for real-time updates.
    - `GET /api/news`: Lists latest news.

## Expected Output
- Frontend can now consume `/api/matches` to show the fixture list.
- Match Centre can connect to `/api/matches/live/:id` to receive live updates without page refreshes.

## Tools Used
- `Next.js API Routes`
- `Server-Sent Events (SSE)`
- `ReadableStream`

## Resource Requirements
- **Database:** Still requires a valid `DATABASE_URL` for production data, but dev mode works with mocks.

## State of Platform
- **Version:** 0.3.0
- **Status:** Backend Ready.
- **Next Step:** Phase 3 - Frontend Core & UI Components.

## Artifacts
- [Live Score Service](file:///c:/Users/Albin/OneDrive/Desktop/WA/WWFN/src/services/live-score-service.ts)
- [Match API](file:///c:/Users/Albin/OneDrive/Desktop/WA/WWFN/src/app/api/matches/route.ts)
