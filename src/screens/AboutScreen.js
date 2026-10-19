import React, { useState } from 'react';
import {
  Linking,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../theme/colors';

// Complete official licence text copied verbatim from the repository LICENSE file.
const LICENSE_TEXT = `Required Notice: Copyright (c) 2026 Swapnanil Dowarah — ForBien. Source: https://github.com/zenixandrothenics/forbien-network

PolyForm Noncommercial License 1.0.0
https://polyformproject.org/licenses/noncommercial/1.0.0

Acceptance
In order to get any license under these terms, you must agree to them as both strict obligations and conditions to all your licenses.

Copyright License
The licensor grants you a copyright license for the software to do everything you might do with the software that would otherwise infringe the licensor's copyright in it for any permitted purpose. However, you may only distribute the software according to Distribution License and make changes or new works based on the software according to Changes and New Works License.

Distribution License
The licensor grants you an additional copyright license to distribute copies of the software. Your license to distribute covers distributing the software with changes and new works permitted by Changes and New Works License.

Notices
You must ensure that anyone who gets a copy of any part of the software from you also gets a copy of these terms or the URL for them above, as well as copies of any plain-text lines beginning with Required Notice: that the licensor provided with the software. For example:

  Required Notice: Copyright Yoyodyne, Inc. (http://example.com)

Changes and New Works License
The licensor grants you an additional copyright license to make changes and new works based on the software for any permitted purpose.

Patent License
The licensor grants you a patent license for the software that covers patent claims the licensor can license, or becomes able to license, that you would infringe by using the software.

Noncommercial Purposes
Any noncommercial purpose is a permitted purpose.

Personal Uses
Personal use for research, experiment, and testing for the benefit of public knowledge, personal study, private entertainment, hobby projects, amateur pursuits, or religious observance, without any anticipated commercial application, is use for a permitted purpose.

Noncommercial Organizations
Use by any charitable organization, educational institution, public research organization, public safety or health organization, environmental protection organization, or government institution is use for a permitted purpose regardless of the source of funding or obligations resulting from the funding.

Fair Use
You may have "fair use" rights for the software under the law. These terms do not limit them.

No Other Rights
These terms do not allow you to sublicense or transfer any of your licenses to anyone else, or prevent the licensor from granting licenses to anyone else. These terms do not imply any other licenses.

Patent Defense
If you make any written claim that the software infringes or contributes to infringement of any patent, your patent license for the software granted under these terms ends immediately. If your company makes such a claim, your patent license ends immediately for work on behalf of your company.

Violations
The first time you are notified in writing that you have violated any of these terms, or done anything with the software not covered by your licenses, your licenses can nonetheless continue if you come into full compliance with these terms, and take practical steps to correct past violations, within 32 days of receiving notice. Otherwise, all your licenses end immediately.

No Liability
As far as the law allows, the software comes as is, without any warranty or condition, and the licensor will not be liable to you for any damages arising out of these terms or the use or nature of the software, under any kind of legal claim.

Definitions
The licensor is the individual or entity offering these terms, and the software is the software the licensor makes available under these terms.

You refers to the individual or entity agreeing to these terms.

Your company is any legal entity, sole proprietorship, or other kind of organization that you work for, plus all organizations that have control over, are under the control of, or are under common control with that organization. Control means ownership of substantially all the assets of an entity, or the power to direct its management and policies by vote, contract, or otherwise. Control can be direct or indirect.

Your licenses are all the licenses granted to you for the software under these terms.

Use means anything you do with the software requiring one of your licenses.

© PolyForm Project Inc.`;

export function AboutScreen() {
  const [showLicence, setShowLicence] = useState(false);

  const openRepository = () => {
    Linking.openURL('https://github.com/zenixandrothenics/forbien-network').catch(() => {
      // Ignore failures — the URL is still shown as plain text above.
    });
  };

  const toggleLicence = () => setShowLicence((prev) => !prev);

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.card}>
          <Text style={styles.appName}>ForBien</Text>
          <Text style={styles.subtitle}>Offline emergency mesh communication</Text>
        </View>

        <View style={styles.metaCard}>
          <View style={styles.metaRow}>
            <Text style={styles.metaLabel}>Creator:</Text>
            <Text style={styles.metaValue}>Swapnanil Dowarah</Text>
          </View>
          <View style={styles.metaRow}>
            <Text style={styles.metaLabel}>Copyright:</Text>
            <Text style={styles.metaValue}>
              Copyright © 2026 Swapnanil Dowarah — ForBien
            </Text>
          </View>
          <View style={styles.metaRow}>
            <Text style={styles.metaLabel}>Licence:</Text>
            <Text style={styles.metaValue}>PolyForm Noncommercial License 1.0.0</Text>
          </View>
          <View style={styles.metaRow}>
            <Text style={styles.metaLabel}>Source repository:</Text>
            <Pressable onPress={openRepository} style={styles.linkWrap}>
              <Text style={styles.linkText}>
                https://github.com/zenixandrothenics/forbien-network
              </Text>
            </Pressable>
          </View>
        </View>

        <Pressable onPress={toggleLicence} style={styles.licenceBtn}>
          <Text style={styles.licenceBtnText}>
            {showLicence ? 'Hide Licence' : 'View Licence'}
          </Text>
        </Pressable>

        {showLicence && (
          <View style={styles.licenceCard}>
            {LICENSE_TEXT.split('\n').map((line, index) => (
              <Text key={index} style={styles.licenceLine}>
                {line}
              </Text>
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bgDeep },
  scroll: { paddingBottom: 24 },
  card: {
    marginHorizontal: 16,
    marginTop: 20,
    alignItems: 'center',
  },
  appName: {
    color: colors.silver,
    fontSize: 24,
    fontWeight: '900',
    letterSpacing: 1,
  },
  subtitle: {
    color: colors.silver,
    fontSize: 15,
    fontWeight: '700',
    marginTop: 6,
    textAlign: 'center',
  },
  metaCard: {
    marginHorizontal: 16,
    marginTop: 16,
    padding: 16,
    backgroundColor: colors.bgPanel,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },
  metaRow: {
    flexDirection: 'row',
    paddingVertical: 7,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
  },
  metaLabel: {
    color: colors.silverDim,
    fontSize: 13,
    fontWeight: '600',
    width: 110,
  },
  metaValue: {
    color: colors.silver,
    fontSize: 13,
    fontWeight: '700',
    flex: 1,
  },
  linkWrap: { flex: 1 },
  linkText: {
    color: colors.silverBlue,
    fontSize: 13,
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
  licenceBtn: {
    marginHorizontal: 16,
    marginTop: 18,
    paddingVertical: 16,
    borderRadius: 14,
    backgroundColor: colors.bgPanel,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
  },
  licenceBtnText: {
    color: colors.silver,
    fontWeight: '800',
    fontSize: 15,
  },
  licenceCard: {
    marginHorizontal: 16,
    marginTop: 12,
    padding: 12,
    backgroundColor: colors.bgCard,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  licenceLine: {
    color: colors.silver,
    fontSize: 10,
    lineHeight: 14,
    fontWeight: '600',
  },
});
