export const scripts = [
  {
    id: 1,
    title: "Late Cancellation Policy Reminder",
    category: "cancellations",
    description: "Professional script to remind clients about late cancellation policies",
    customFields: ["Client Name", "Notice Period", "Session Fee"],
    content: `Hi [Client Name],

I wanted to follow up regarding your recent cancellation. As outlined in our therapy agreement, I require [Notice Period] notice for cancellations to avoid the full session fee of [Session Fee].

This policy ensures I can offer your time slot to other clients who may need it, and it helps maintain the structure that supports our therapeutic work together.

If you have any questions about this policy or would like to discuss scheduling concerns, please let me know. I'm here to work with you to find solutions that support your therapy goals.

Best regards,
[Your Name]`
  },
  {
    id: 2,
    title: "After-Hours Communication Boundary",
    category: "after-hours",
    description: "Clear communication about after-hours availability and emergency protocols",
    customFields: ["Office Hours", "Emergency Contact"],
    content: `Thank you for reaching out. I want to clarify my communication boundaries to ensure you have clear expectations about when I'm available.

My office hours are [Office Hours]. During these times, I typically respond to non-urgent messages within 24 hours.

For urgent mental health concerns outside of these hours, please contact [Emergency Contact] or go to your nearest emergency room.

This boundary helps me maintain the energy and focus needed to provide you with quality care during our sessions and protects time for my own well-being, which ultimately benefits our therapeutic relationship.

I look forward to addressing your message during my next business day.

Warm regards,
[Your Name]`
  },
  {
    id: 3,
    title: "Fee Increase Notification",
    category: "fees",
    description: "Professional notification of fee changes with advance notice",
    customFields: ["Client Name", "Current Fee", "New Fee", "Effective Date", "Notice Period"],
    content: `Dear [Client Name],

I hope this message finds you well. I'm writing to inform you of an upcoming change to my session fees.

Effective [Effective Date], my session fee will increase from [Current Fee] to [New Fee]. This represents my first fee adjustment in [Notice Period] and reflects the ongoing costs of maintaining a quality practice.

I understand that fee changes can be concerning, and I want to ensure we have time to discuss how this affects your therapy goals. If you have questions about this change or would like to explore options, please don't hesitate to bring this up in our next session.

I value our therapeutic relationship and am committed to continuing to provide you with quality care.

Sincerely,
[Your Name]`
  },
  {
    id: 4,
    title: "No-Show Follow-Up",
    category: "no-shows",
    description: "Professional follow-up after a missed appointment without notice",
    customFields: ["Client Name", "Missed Date", "Session Fee"],
    content: `Hi [Client Name],

I noticed that you weren't able to make our scheduled appointment on [Missed Date]. I hope everything is okay.

As outlined in our therapy agreement, missed appointments without 24-hour notice are charged the full session fee of [Session Fee]. This policy helps maintain the therapeutic frame and ensures I can manage my practice sustainably.

I understand that unexpected situations arise. If there were circumstances that prevented you from attending or providing notice, please let me know so we can discuss this further.

Please reach out when you're ready to schedule your next appointment. I'm here to support your therapeutic goals.

Best regards,
[Your Name]`
  },
  {
    id: 5,
    title: "Sliding Scale Request Response",
    category: "sliding-scale",
    description: "Thoughtful response to requests for reduced fees",
    customFields: ["Client Name", "Current Fee", "Requested Fee"],
    content: `Dear [Client Name],

Thank you for sharing your financial situation with me and requesting a fee adjustment. I appreciate your openness and understand that financial stress can impact many areas of life.

I have limited sliding scale spots available in my practice. Currently, I'm able to offer a rate of [Requested Fee] instead of my standard [Current Fee]. This adjustment would be reviewed every six months to ensure it continues to work for both of us.

If this feels manageable for you, we can discuss the details in our next session. If this rate is still challenging, I'm happy to provide referrals to therapists who may have more availability at lower fee ranges.

I want to ensure you have access to quality mental health care that doesn't create additional financial stress.

Warm regards,
[Your Name]`
  },
  {
    id: 6,
    title: "Session Time Boundary",
    category: "time",
    description: "Gentle reminder about session time limits and structure",
    customFields: ["Client Name", "Session Length"],
    content: `Hi [Client Name],

I wanted to address something I've noticed in our recent sessions. Our therapy sessions are scheduled for [Session Length], and I've observed that we've been running over time consistently.

While I understand the desire to continue important conversations, maintaining clear time boundaries is actually therapeutic. It helps us use our time together more intentionally and models healthy boundary-setting.

Moving forward, I'll provide a 5-minute warning before our session ends so we can wrap up appropriately. This structure will help us make the most of our scheduled time together.

If you feel like [Session Length] isn't sufficient for your needs, we can discuss options like longer sessions or more frequent meetings.

Looking forward to our continued work together.

Best,
[Your Name]`
  },
  {
    id: 7,
    title: "Crisis Contact Clarification",
    category: "crisis",
    description: "Clear explanation of crisis protocols and appropriate contact methods",
    customFields: ["Emergency Contact", "Crisis Line"],
    content: `I want to ensure you have clear information about how to reach support if you're experiencing a mental health crisis.

If you're having thoughts of suicide or self-harm, or if you're in immediate danger, please:

1. Call 911 or go to your nearest emergency room
2. Contact the National Suicide Prevention Lifeline at 988
3. Call [Crisis Line] for local crisis support

For urgent but non-life-threatening concerns outside of our scheduled sessions, you can reach me at [Emergency Contact]. I'll respond as soon as possible, typically within a few hours.

Please remember that text messages and emails are not secure forms of communication for crisis situations, and I may not see them immediately.

Your safety is my priority, and I want you to have multiple options for support when you need it most.

Take care,
[Your Name]`
  },
  {
    id: 8,
    title: "Therapy Termination Notice",
    category: "referrals",
    description: "Professional notice for ending therapeutic relationship with referral support",
    customFields: ["Client Name", "Termination Date", "Referral Options"],
    content: `Dear [Client Name],

After careful consideration, I believe it would be in your best interest to transition to a therapist who specializes more specifically in the areas you'd like to focus on.

Your last session with me will be on [Termination Date]. This will give us time to process this transition together and ensure you feel supported in moving forward.

I have several referral options that I believe would be excellent fits for your needs: [Referral Options]. I'm happy to provide more detailed information about each of these providers and can assist with the transition process.

Please know that this decision reflects my commitment to ensuring you receive the most appropriate care, not any concerns about our work together. You've made meaningful progress, and I believe you'll continue to grow with the right therapeutic support.

I'll be available to discuss this transition and answer any questions during our remaining sessions.

Warmly,
[Your Name]`
  },
  {
    id: 9,
    title: "Payment Policy Reminder",
    category: "fees",
    description: "Professional reminder about payment expectations and policies",
    customFields: ["Client Name", "Payment Method", "Due Date"],
    content: `Hi [Client Name],

I wanted to send a friendly reminder about our payment policy. Payment for sessions is due [Due Date] via [Payment Method].

I notice your account has an outstanding balance. Maintaining current payments helps ensure we can focus on your therapeutic goals without financial concerns affecting our work together.

If you're experiencing financial difficulties or have questions about your account, please let me know so we can discuss options. I'm committed to working with you to find solutions that support your continued therapy.

Please reach out if you need clarification about payment methods or if there's anything I can do to help make this process easier.

Thank you for your attention to this matter.

Best regards,
[Your Name]`
  },
  {
    id: 10,
    title: "Boundary Violation Address",
    category: "communication",
    description: "Professional response to inappropriate client communication or behavior",
    customFields: ["Client Name", "Specific Behavior"],
    content: `Dear [Client Name],

I need to address [Specific Behavior] that occurred recently. This behavior crosses professional boundaries that are essential for maintaining a therapeutic relationship.

Clear boundaries protect both of us and create a safe space for therapeutic work. Moving forward, I need you to understand that [Specific Behavior] is not appropriate in our professional relationship.

If this behavior continues, it may impact our ability to work together effectively. I'm committed to helping you succeed in therapy, and part of that involves maintaining appropriate professional boundaries.

I'd like to discuss this further in our next session to ensure we're both clear about expectations and can continue our work together productively.

If you have questions about these boundaries or would like to process your feelings about them, please bring this up during our session time.

Professionally,
[Your Name]`
  },
  {
    id: 11,
    title: "Insurance Coverage Change",
    category: "fees",
    description: "Notification about changes in insurance coverage or billing",
    customFields: ["Client Name", "Insurance Company", "Effective Date", "New Rate"],
    content: `Dear [Client Name],

I'm writing to inform you about a change in my relationship with [Insurance Company] that will affect your therapy coverage.

Effective [Effective Date], I will no longer be accepting [Insurance Company] insurance. This means that beginning on that date, sessions will be [New Rate] and paid out-of-pocket.

I understand this is a significant change. Here are your options:

1. Continue therapy with me at the self-pay rate
2. I can provide you with a superbill to submit for out-of-network reimbursement
3. I can provide referrals to in-network therapists

I'd like to discuss this change and your preferences in our next session. My goal is to ensure you continue receiving quality mental health care, whether that's with me or through a referral to another qualified therapist.

Please don't hesitate to reach out if you have questions before our next meeting.

Sincerely,
[Your Name]`
  },
  {
    id: 12,
    title: "Session Frequency Recommendation",
    category: "time",
    description: "Professional recommendation about session frequency and scheduling",
    customFields: ["Client Name", "Current Frequency", "Recommended Frequency"],
    content: `Hi [Client Name],

I've been reflecting on your progress and current therapeutic needs, and I'd like to discuss our session frequency.

Currently, we're meeting [Current Frequency]. Based on what we've been working on and your therapeutic goals, I believe [Recommended Frequency] would better support your progress.

This recommendation is based on [specific reasons related to therapeutic progress, crisis stabilization, skill building, etc.]. More frequent sessions can provide additional support during challenging periods and help maintain momentum in your growth.

I understand that scheduling and financial considerations are important factors in this decision. I'm happy to discuss how we can make this work within your constraints or explore alternative options.

Let's plan to discuss this recommendation in detail during our next session so you can ask questions and we can determine the best path forward together.

Best regards,
[Your Name]`
  },
  {
    id: 13,
    title: "Missed Payment Follow-Up",
    category: "fees",
    description: "Professional follow-up for overdue payments with clear next steps",
    customFields: ["Client Name", "Amount Due", "Payment Method"],
    content: `Dear [Client Name],

I hope you're doing well. I'm reaching out regarding your account balance of [Amount Due] for recent therapy sessions.

Payment for therapy services helps ensure I can continue providing quality care and maintain the structure that supports our therapeutic relationship. 

I understand that financial situations can change unexpectedly. If you're experiencing difficulty with payment, please let me know so we can discuss possible solutions, such as a payment plan or temporary fee adjustment.

Please submit payment via [Payment Method] within the next week, or contact me to discuss alternatives. If payment concerns are adding stress to your life, I want to address this directly so it doesn't interfere with your therapeutic progress.

I value our work together and want to ensure that practical matters like payment don't become barriers to your mental health care.

Thank you for your prompt attention to this matter.

Sincerely,
[Your Name]`
  },
  {
    id: 14,
    title: "Vacation Schedule Notice",
    category: "time",
    description: "Professional notification about therapist vacation and coverage arrangements",
    customFields: ["Client Name", "Vacation Dates", "Coverage Contact"],
    content: `Dear [Client Name],

I wanted to give you advance notice that I'll be out of the office from [Vacation Dates] for a planned vacation.

During this time, I will not be available for sessions or non-emergency communication. This planned break helps me maintain the energy and focus needed to provide you with quality care when I return.

If you experience a mental health emergency during my absence, please contact [Coverage Contact] or go to your nearest emergency room. For routine scheduling or non-urgent matters, I'll respond to messages when I return.

Let's use our remaining sessions before my vacation to prepare for this break and discuss any concerns you might have about the temporary interruption in our regular schedule.

I'll be back and ready to resume our work together on [Return Date].

Best regards,
[Your Name]`
  },
  {
    id: 15,
    title: "Group Therapy Transition",
    category: "referrals",
    description: "Recommendation for transitioning from individual to group therapy",
    customFields: ["Client Name", "Group Type", "Group Schedule"],
    content: `Hi [Client Name],

Based on our work together and your therapeutic goals, I believe you might benefit from participating in [Group Type] therapy in addition to or instead of our individual sessions.

Group therapy can offer unique benefits including:
- Peer support and connection
- Opportunities to practice new skills in a safe environment
- Different perspectives on similar challenges
- Cost-effective therapy option

The group meets [Group Schedule] and focuses on [specific therapeutic focus]. I believe your insights and experiences would be valuable to other group members, while their perspectives could support your continued growth.

This doesn't mean our individual work has been unsuccessful - rather, it reflects your readiness to engage in a different therapeutic format that might accelerate your progress.

Let's discuss this option in our next session. I can answer questions about the group format and help you decide if this feels like the right next step in your therapeutic journey.

Warm regards,
[Your Name]`
  },
  {
    id: 16,
    title: "Technology Boundary Setting",
    category: "communication",
    description: "Clear guidelines about appropriate use of technology in therapy relationship",
    customFields: ["Client Name", "Preferred Contact Method"],
    content: `Dear [Client Name],

I want to clarify my policies around technology and communication to ensure we both have clear expectations.

For scheduling and brief administrative matters, please use [Preferred Contact Method]. I typically respond to these messages within 24 hours during business days.

Please keep in mind:
- Text messages and emails are not secure forms of communication
- These platforms should not be used for therapy content or crisis situations
- Social media connections are not appropriate in our professional relationship

If you need to discuss therapeutic content between sessions, please save these topics for our next meeting or contact me by phone if it's urgent.

These boundaries help protect your privacy and maintain the professional frame that supports effective therapy.

If you have questions about these guidelines or need clarification about appropriate communication, please bring this up in our next session.

Professionally,
[Your Name]`
  },
  {
    id: 17,
    title: "Scope of Practice Clarification",
    category: "referrals",
    description: "Professional explanation when client needs exceed therapist's scope of practice",
    customFields: ["Client Name", "Specific Need", "Referral Type"],
    content: `Dear [Client Name],

Thank you for bringing up [Specific Need] in our recent session. I want to be transparent with you about my scope of practice and ensure you receive the most appropriate care.

While I'm qualified to address many mental health concerns, [Specific Need] falls outside my area of expertise. Referring you to a specialist in this area is the most ethical way I can support your wellbeing.

I recommend connecting with [Referral Type] who specializes in this area. I'm happy to provide specific referrals and can assist with the transition process.

This doesn't mean our work together has been unsuccessful or that I'm abandoning you. Rather, recognizing the limits of my expertise and connecting you with appropriate resources is part of providing ethical, quality care.

We can continue working together on other therapeutic goals while you receive specialized support for [Specific Need], or we can discuss transitioning your care entirely - whatever feels most supportive for you.

Let's discuss this further in our next session.

Professionally,
[Your Name]`
  },
  {
    id: 18,
    title: "Confidentiality Reminder",
    category: "communication",
    description: "Reminder about confidentiality limits and reporting requirements",
    customFields: ["Client Name"],
    content: `Dear [Client Name],

I want to remind you about the confidentiality protections and limitations that govern our therapeutic relationship.

Everything we discuss in therapy is confidential, with these important exceptions:
- If you're in immediate danger of harming yourself or others
- If there's suspected abuse of a child, elderly person, or dependent adult
- If I receive a court order requiring disclosure

Additionally, I may consult with other mental health professionals about your case for clinical guidance, but this is done without identifying information and with your therapeutic benefit in mind.

Understanding these boundaries helps ensure you can share openly while knowing the circumstances under which I might need to break confidentiality to protect safety.

If you have questions about confidentiality or want to discuss any concerns about privacy, please bring this up during our sessions.

Your trust is essential to our therapeutic work, and I'm committed to protecting your privacy within these ethical and legal guidelines.

Sincerely,
[Your Name]`
  },
  {
    id: 19,
    title: "Session Preparation Expectations",
    category: "time",
    description: "Guidelines for how clients can prepare for and maximize therapy sessions",
    customFields: ["Client Name"],
    content: `Hi [Client Name],

I wanted to share some thoughts about how you can get the most out of our therapy sessions together.

Between sessions, consider:
- Noting situations, thoughts, or feelings you'd like to discuss
- Practicing any skills or techniques we've worked on
- Reflecting on patterns or insights from our previous session

During sessions, I encourage you to:
- Share what feels most important or pressing
- Ask questions about anything that's unclear
- Let me know if something isn't feeling helpful

Remember that therapy works best when you're an active participant. Your insights, questions, and feedback help guide our work together in the most beneficial direction.

There's no "right" way to do therapy, but being thoughtful about what you want to address can help us use our time together effectively.

If you're ever unsure about how to bring something up or what would be helpful to focus on, just let me know. Part of my role is helping you navigate the therapy process itself.

Looking forward to our continued work together.

Best,
[Your Name]`
  },
  {
    id: 20,
    title: "Treatment Plan Review",
    category: "time",
    description: "Periodic review of therapeutic goals and treatment progress",
    customFields: ["Client Name", "Review Period"],
    content: `Dear [Client Name],

It's been [Review Period] since we established your initial treatment goals, and I think it's a good time to review your progress and assess whether any adjustments would be helpful.

When we started working together, your main goals were:
[Space for therapist to list original goals]

I'd like to spend time in our next session reviewing:
- Progress you've made toward these goals
- Any goals that need to be modified or updated
- New areas you'd like to focus on
- Whether our current approach is working well for you

This kind of periodic review helps ensure our work together stays focused and relevant to your current needs. Your feedback about what's been most and least helpful will guide how we proceed.

Please come to our next session prepared to share your thoughts about your progress and any changes you'd like to make to our therapeutic focus.

I'm proud of the work you've been doing and look forward to planning the next phase of your growth together.

Warm regards,
[Your Name]`
  }
];