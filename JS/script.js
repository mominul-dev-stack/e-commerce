function DateTime()
{
    const now = new Date();
    const currentDateTime = now.toLocaleString();
    document.getElementById('datetime').textContent = currentDateTime;
}
DateTime();
setInterval(DateTime, 1000);