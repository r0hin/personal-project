import * as firebase from 'firebase';
export interface Post {
  id: string,
  uid: string,
  caption: string,
  comments: number,
  likes: number,
  name: string,
  username: string,

  file_name: string,
  file_url: string,
  photo_url: string,
  tags: Array<String>,

  prviate: boolean,
  status: boolean,
  report_weight: number,
  reported: boolean,

  timestamp: firebase.firestore.FieldValue,
  
  latest_comment: string | undefined | null,
  latest_comment_content: string | undefined | null,
  latest_comment_name: string | undefined | null,
  latest_comment_photo: string | undefined | null,
  latest_comment_uid: string | undefined | null,
}