import 'package:firebase_auth/firebase_auth.dart';

class AuthService {
  // Sign in anonymously
  // Sign in / sign up with email & password
  // Sign out

  final FirebaseAuth _auth = FirebaseAuth.instance;

  Future signInAnon() async {
    try {
      UserCredential result = await _auth.signInAnonymously();
      User user = result.user;
      return user;
    } catch (e) {
      print(e.toString());
      return null;
    }
  }
}
