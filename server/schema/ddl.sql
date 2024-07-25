create table link_summary_post
(
    id         serial primary key,
    user_id    integer   not null,
    content    varchar   not null,
    link_url   varchar   not null,
    created_at timestamp not null
);

create index idx_link_summary_post_user_created_at on link_summary_post using btree(user_id, created_at);

create table "user"
(
    id         serial primary key,
    email      varchar              not null,
    nickname   varchar              not null,
    password   varchar              not null,
    is_active  boolean default true not null,
    created_at timestamp            not null
);

create unique index idx_user_email on "user" using btree(email);
