export const externalEmail = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin-top: 20px;
      background-color: #f4f4f9;
    }
    .container {
      width: 80%;
      max-width: 800px;
      margin: auto;
      padding: 20px;
      background-color: #ffffff;
      border: 1px solid #dddddd;
      border-radius: 5px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    p {
      line-height: 1.2;
    }
    a {
      color: #0073e6;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
    .signature img {
      margin-top: 10px;
      max-width: 100%;
      height: auto;
    }
    .highlight {
      font-weight: bold;
    }
    
  </style>
</head>
<body>
  <div class="container">
    <p>Hello \${firstName},</p>
    <p>I thought of you when asked to share our new <a href="https://www.academicjobs.com/jobs/myjob/\${id}?active=true" rel="noopener noreferrer" target="_blank" class="highlight">\${title}</a> job out via ‘Academic Connect’.</p>
    <p>The idea is to keep valued colleagues like yourself informed with what we are up to here at \${company_name}.</p>
    <p>You may well know someone perfect for us, and so we would welcome you to <a href="https://www.academicjobs.com/jobs/myjob/\${id}?mode=share" rel="noopener noreferrer" target="_blank">share it around</a> too.</p>
    <p>Regards,</p>
    <p>\${inviterName}</p>
    <p><a href="https://www.academicjobs.com/auth/signin" rel="noopener noreferrer" target="_blank">Your Helpful Link</a> to stay connected with us… sign in using your email & this password: dfxg9CIqip </p>
    <p>About AcademicConnect:</p>
    <p>Research suggests that the most desirable candidates come from within our own professional networks.
      The more we share our job with valued connections, the greater chance of you working with an amazing (likeable) superstar.
      ‘Academic Connect’ is used by Oxford, and is extremely successful and efficient.</p>
    <p><i>"Working Together we create better teams"</i></p>
    <p>Thanks in advance,</p>
    <p>Sarah West</p>
    <p>(on behalf of \${inviterName})</p>
    <div class="signature">
      <img src="https://academicjobs.s3.amazonaws.com/img/_misc/sarah-west-email-signature.jpg" alt="Sarah West">
    </div>
  </div>
</body>
</html>
`;
