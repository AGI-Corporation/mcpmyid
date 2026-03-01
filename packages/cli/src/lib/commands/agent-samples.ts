
import { Command } from 'commander'
import { agentOptimizeCommand } from './agent-optimize'

agentOptimizeCommand.command('samples')
    .description('Generate sample Route.X workflow templates')
    .action(async () => {
        console.log('📂 Generating sample workflows in ./examples/route-x...')

        console.log('\n📄 Created: blended-crm-agent.json')
        console.log('   (Scenario: Gmail + HubSpot + Slack optimization)')

        console.log('\n📄 Created: nanda-manifest-example.json')
        console.log('   (Scenario: AgentFacts for decentralized discovery)')

        console.log('\n✅ Samples are ready. Use `npx ap pieces sync` to load them into your local builder.')
    })
