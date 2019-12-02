import faker from 'faker'

class Comment{
    constructor(values){
        this.commentAvatar = faker.image.avatar();
        this.authorName = values.authorName;
        this.commentTime = Date(Date.now().toString()).slice(0,24);
        this.commentDetails = values.commentDetails;
    }

}

export default Comment;