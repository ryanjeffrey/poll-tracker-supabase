const SUPABASE_URL = 'https://xexayazyxwoajshplpqh.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhleGF5YXp5eHdvYWpzaHBscHFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjAzMjA0OTIsImV4cCI6MTk3NTg5NjQ5Mn0.u-0zS-Su3LEiijPIvrFXFcBTMPkQSfQ7NM-erIPDnGc';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);


export async function createPoll(poll) {
    const response = await client.from('polls').insert(poll);
    return checkError(response);
}

export async function getPolls() {
    const response = await client.from('polls').select('*');
    return checkError(response);
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}
