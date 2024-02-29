import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import styles from "./../styles/profileScreenStyle";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getUserData } from "../redux/slices/userDataSlice";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function ProfileScreen() {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const auth = getAuth();
  const uid = auth.currentUser.uid;

  const fetchUserData = useCallback(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        try {
          const uid = user.uid;
          axios
            .post(`${process.env.DOMAIN}/get-emp-data`, { empDocId: uid })
            .then((res) => {
              dispatch(getUserData(res.data.data));
            });
        } catch (error) {
          console.log("Error", err);
        }
      } else {
        dispatch(getUserData(null));
      }
    });
  });

  useEffect(() => {
    fetchUserData();
  }, []);

  const userData = useSelector((state) => state.userData.userData);

  const [data, setData] = useState({
    empDocId: uid,
    about: "",
    empName: "",
    empContactNo: "",
    experiance: "",
    qualification: "",
    skills: "",
    linkedinUrl: "",
    instagramUrl: "",
    facebookUrl: "",
  });
  console.log("Data", data);

  useEffect(() => {
    if (userData) {
      setData({ ...userData });
    }
  }, [userData]);

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  const createUserProfile = async () => {
    try {
      data.skills =
        typeof data.skills === "string" ? data.skills.split("\n") : [];
      const res = await axios.post(`${process.env.DOMAIN}/add-new-emp`, data);
      console.log("New employee added successfully:", res.data.data);
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView
        keyboardShouldPersistTaps="never"
        showsVerticalScrollIndicator={false}
      >
        <Header />
        <View style={styles.profileScreen}>
          {/* About  Section */}
          <View style={styles.description}>
            <Text style={styles.heading}>About</Text>
            <View style={styles.inputBox}>
              <TextInput
                placeholder="Max 50 words . . ."
                multiline
                height={270}
                value={data.about}
                onChangeText={(about) =>
                  setData((prevData) => ({ ...prevData, about }))
                }
                style={styles.descriptionText}
              />
            </View>
          </View>

          {/* Experiance  */}
          <View style={styles.personalInfo}>
            {/* Full Name  */}
            <View style={styles.description}>
              <Text style={styles.heading}>Full Name</Text>
              <View style={styles.inputBox}>
                <TextInput
                  placeholder="Full name"
                  value={data.empName}
                  onChangeText={(empName) =>
                    setData((prevData) => ({ ...prevData, empName }))
                  }
                  style={styles.descriptionText}
                />
              </View>
            </View>

            {/* Emp Contact No  */}
            <View style={styles.description}>
              <Text style={styles.heading}>Contact No</Text>
              <View style={styles.inputBox}>
                <TextInput
                  placeholder="Contact No"
                  value={data.empContactNo.toString()}
                  onChangeText={(empContactNo) =>
                    setData((prevData) => ({ ...prevData, empContactNo }))
                  }
                  style={styles.descriptionText}
                />
              </View>
            </View>

            {/* Experiance  */}
            <View style={styles.description}>
              <Text style={styles.heading}>Experiance</Text>
              <View style={styles.inputBox}>
                <TextInput
                  placeholder="In years"
                  keyboardType="numeric"
                  value={data.experiance.toString()}
                  onChangeText={(experiance) =>
                    setData((prevData) => ({ ...prevData, experiance }))
                  }
                  style={styles.descriptionText}
                />
              </View>
            </View>

            {/* Qualification  */}
            <View style={styles.description}>
              <Text style={styles.heading}>Qualification</Text>
              <View style={styles.inputBox}>
                <TextInput
                  placeholder="Higher"
                  value={data.qualification}
                  onChangeText={(qualification) =>
                    setData((prevData) => ({ ...prevData, qualification }))
                  }
                  style={styles.descriptionText}
                />
              </View>
            </View>

            {/* Skills  */}
            <View style={styles.description}>
              <Text style={styles.heading}>Skills</Text>
              <View style={styles.inputBox}>
                <TextInput
                  multiline
                  maxHeight={270}
                  placeholder="One skill in one line"
                  value={data.skills}
                  onChangeText={(skills) =>
                    setData((prevData) => ({ ...prevData, skills }))
                  }
                  style={styles.descriptionText}
                />
              </View>
            </View>

            {/* Linkedin URL  */}
            <View style={styles.description}>
              <Text style={styles.heading}>Linkedin URL</Text>
              <View style={styles.inputBox}>
                <TextInput
                  placeholder="Linkedin URL"
                  value={data.linkedinUrl}
                  onChangeText={(linkedinUrl) =>
                    setData((prevData) => ({ ...prevData, linkedinUrl }))
                  }
                  style={styles.descriptionText}
                />
              </View>
            </View>

            {/* Instagram URL  */}
            <View style={styles.description}>
              <Text style={styles.heading}>Instagram URL</Text>
              <View style={styles.inputBox}>
                <TextInput
                  placeholder="Instagram URL"
                  value={data.instagramUrl}
                  onChangeText={(instagramUrl) =>
                    setData((prevData) => ({ ...prevData, instagramUrl }))
                  }
                  style={styles.descriptionText}
                />
              </View>
            </View>

            {/* Facebook URL  */}
            <View style={styles.description}>
              <Text style={styles.heading}>Facebook URL</Text>
              <View style={styles.inputBox}>
                <TextInput
                  placeholder="Facebook URL"
                  value={data.facebookUrl}
                  onChangeText={(facebookUrl) =>
                    setData((prevData) => ({ ...prevData, facebookUrl }))
                  }
                  style={styles.descriptionText}
                />
              </View>
            </View>

            {/* Submit Button  */}
            <View style={styles.submitBtnBox}>
              <TouchableOpacity
                onPress={createUserProfile}
                style={styles.submitBtn}
              >
                <Text style={styles.btnText}>Create Profile</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
