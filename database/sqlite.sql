projectsprojectsINSERT INTO events (
    id,
    title,
    long_description,
    short_description,
    date,
    hashtags,
    short_tips,
    photo,
    created_at,
    updated_at
) VALUES (
    1,
    'Event Title',
    'This is a detailed description of the event.',
    'Brief event overview.',
    '2024-12-10',
    '#event #fun',
    'Arrive early to secure seats.',
    '/path/to/photo.jpg',
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
);

