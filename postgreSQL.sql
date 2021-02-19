--databse link : https://btholt.github.io/complete-intro-to-databases/sample-postgresql.sql
--basic queries...;

select * from boards;
select * from users;

select * from users limit 4;
select user_id,username,email  from users limit 10;

select user_id,username,email  from users where user_id = 120;
select user_id,username,email  from users where user_id < 10;
select count(user_id)  from users where user_id < 120;

select user_id,username,email  from users where last_login IS NULL AND created_on < NOW() - interval '6 months' LIMIT 10;
select count(user_id)  from users where last_login IS NULL AND created_on < NOW() - interval '6 days' limit 10;

select user_id,username,created_on  from users where last_login IS NULL AND created_on < NOW() - interval '6 month'  ORDER BY created_on limit 10;
select user_id,username,created_on  from users where last_login IS NULL AND created_on < NOW() - interval '6 month'  ORDER BY created_on DESC limit 10;

update users set last_login = NOW() where user_id = 1;
update users set last_login = NOW() where user_id = 1 RETURNING *;
update users set last_login = NOW() where user_id = 1 RETURNING user_id,username;

select board_id,comment_id,user_id,LEFT(comment,20) As preview from comments where board_id = 39;

select comments.comment_id,users.username,LEFT(comment,20) As Preview from comments INNER JOIN users ON users.user_id = comments.user_id where board_id = 39;
select comment_id,comments.user_id,users.username,LEFT(comment,20) As Preview from comments INNER JOIN users ON users.user_id = comments.user_id where board_id = 39 Order by comment_id limit 5;
select boards.board_name , count(*) as comment_count from comments natural inner join boards group by boards.board_name order by comment_count asc limit 10;
select boards.board_name , count(*) as comment_count from comments natural right join boards group by boards.board_name order by comment_count asc limit 10;
select boards.board_name , count(*) as comment_count from comments natural right join boards group by boards.board_name order by comment_count asc limit 10;


//Advanced queries(db with JSON)

select * from rich_content;
select content_id,content->'type' As content_type from rich_content;

select DISTINCT CAST(content->'type' AS TEXT) As content_type from rich_content;
select DISTINCT content->>'type' As content_type from rich_content;

select content->'dimensions'->'height' As height from rich_content where content->>'dimensions' IS NOT NULL;
select content_id ,  content->'dimensions'->'height' As height , content -> 'dimensions' -> 'width' As width from rich_content where content->>'dimensions' IS NOT NULL;

EXPLAIN select content_id ,  content->'dimensions'->'height' As height , content -> 'dimensions' -> 'width' As width from rich_content where content->>'dimensions' IS NOT NULL;
create index on comments(board_id);
