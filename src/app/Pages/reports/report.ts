export interface Report{
  id: number,
  date: string,
  team: string,
  action: string,
  jira_id: string,
  jira_summary: number,
  working_status: string,
  ticket_status: string,
  tester_1: string
  tester_2: string
  tester_3: string
  jira_id_summary: string
}
