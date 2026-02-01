export default function Footer() {
    return (
        <footer style={{
            borderTop: '1px solid var(--border-subtle)',
            padding: '60px 0',
            background: 'var(--bg-secondary)',
            fontSize: '0.9rem',
            color: 'var(--text-muted)'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    &copy; {new Date().getFullYear()} Senior Dev Portfolio. All rights reserved.
                </div>
                <div style={{ display: 'flex', gap: '24px' }}>
                    <a href="#" className="footer-link">GitHub</a>
                    <a href="#" className="footer-link">LinkedIn</a>
                    <a href="#" className="footer-link">Twitter</a>
                </div>
            </div>
        </footer>
    );
}
