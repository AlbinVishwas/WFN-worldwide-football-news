import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    console.log('Start seeding ...')

    // 1. Create Leagues
    const premierLeague = await prisma.league.create({
        data: {
            name: 'Premier League',
            country: 'England',
            logo: 'https://media.api-sports.io/football/leagues/39.png',
        },
    })

    const laLiga = await prisma.league.create({
        data: {
            name: 'La Liga',
            country: 'Spain',
            logo: 'https://media.api-sports.io/football/leagues/140.png',
        },
    })

    // 2. Create Teams
    const arsenal = await prisma.team.create({
        data: {
            name: 'Arsenal',
            shortName: 'ARS',
            color: '#EF0107',
            logo: 'https://media.api-sports.io/football/teams/42.png',
            leagueId: premierLeague.id,
        },
    })

    const liverpool = await prisma.team.create({
        data: {
            name: 'Liverpool',
            shortName: 'LIV',
            color: '#C8102E',
            logo: 'https://media.api-sports.io/football/teams/40.png',
            leagueId: premierLeague.id,
        },
    })

    const realMadrid = await prisma.team.create({
        data: {
            name: 'Real Madrid',
            shortName: 'RMA',
            color: '#FFFFFF',
            logo: 'https://media.api-sports.io/football/teams/541.png',
            leagueId: laLiga.id,
        },
    })

    const barcelona = await prisma.team.create({
        data: {
            name: 'Barcelona',
            shortName: 'BAR',
            color: '#004D98',
            logo: 'https://media.api-sports.io/football/teams/529.png',
            leagueId: laLiga.id,
        },
    })

    // 3. Create Players (Sample)
    await prisma.player.create({
        data: {
            name: 'Bukayo Saka',
            position: 'Forward',
            number: 7,
            teamId: arsenal.id,
            formRating: 'HOT',
        },
    })

    await prisma.player.create({
        data: {
            name: 'Mohamed Salah',
            position: 'Forward',
            number: 11,
            teamId: liverpool.id,
            formRating: 'HOT',
        },
    })

    // 4. Create Matches
    // Live Match
    const liveMatch = await prisma.match.create({
        data: {
            date: new Date(), // Now
            status: 'LIVE',
            homeTeamId: arsenal.id,
            awayTeamId: liverpool.id,
            leagueId: premierLeague.id,
            homeScore: 1,
            awayScore: 1,
            minute: 65,
            momentum: {
                home: 60,
                away: 40,
                history: [50, 55, 60, 45, 40, 60] // Dummy momentum data
            },
        },
    })

    // Scheduled Match
    await prisma.match.create({
        data: {
            date: new Date(Date.now() + 86400000), // Tomorrow
            status: 'SCHEDULED',
            homeTeamId: realMadrid.id,
            awayTeamId: barcelona.id,
            leagueId: laLiga.id,
        },
    })

    // 5. Create News
    await prisma.newsItem.create({
        data: {
            title: 'Arsenal vs Liverpool: Title Decider?',
            slug: 'arsenal-vs-liverpool-title-decider',
            summary: 'Two giants collide at the Emirates in a match that could define the season.',
            content: '# The Stakes are High\n\nBoth teams are in incredible form...',
            type: 'NEWS',
            tags: ['Premier League', 'Arsenal', 'Liverpool'],
            image: 'https://images.unsplash.com/photo-1522778119026-d647f0565c6a?auto=format&fit=crop&q=80',
        },
    })

    console.log(`Seeding finished. Live Match ID: ${liveMatch.id}`)
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
