# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **552**
- latestMachineAdded: **パチスロろくでなしBLUES**（Sammy / 2011-02-18）
- latestRecord: `docs/real_machine_db/machines/2011-02-18_pachislot-rokudenashi-blues.md`
- chronologicalFrontier: **2011-02-18**
- frontierLatestExactDateMachine: **パチスロろくでなしBLUES**（Sammy / 2011-02-18）
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、551レコード `パチスロスーパー海物語IN沖縄30KD` を再取得して開始。
- 開始時正本は **recordCount 551 / chronologicalFrontier 2011-02-07**。
- 2011-02-07以降を導入日・納品日・月次一覧で境界監査。
- HAZUSEでSammy `パチスロろくでなしBLUES` の導入開始日 **2011-02-18**、型式 `ろくでなしBLUES-F`、検定番号 `0S0999` を確認。
- 2/21群として `パチスロ真・三國無双`、`戦国BASARA2`、`シオサイマックス-30` の具体日資料があるため、現時点で2/7後の最古の強い具体日候補として2/18本機を優先処理。
- mainコード検索に加え想定パスの直接取得で未登録を確認後、552件目として追加。

## 今回追加 — 552 パチスロろくでなしBLUES

- メーカー: **Sammy / サミー**
- 型式: **ろくでなしBLUES-F**
- 検定番号: **0S0999**
- 導入: **2011-02-18**
- タイプ: **5号機 / ノーマルAタイプ / 天井RT搭載**
- 機械割: **97.5 / 99.0 / 101.3 / 106.0 / 110.2 / 116.1%**
- BIG: **1/268.6 → 1/199.8**
- MIDDLE: **1/339.6 → 1/287.4**
- ボーナス合算: **1/150.0 → 1/117.9**
- baseGamesPer50: **約33.6〜36.7G**
- BIG: **約311枚**
- MIDDLE: **約91枚**
- 天井: **BIG後674G / MIDDLE後555G → 次回ボーナスまでRT**

### resetBehavior v0.7 — ろくでなしBLUES

- `settingChangeBehavior`: **CEILING_PROGRESS_RETAIN_CONFIRMED**。
- `gameCounterReset`: **RETAIN**。旧解析資料に「設定変更時も天井到達までのゲーム数はクリアされない」と明記。
- `ceilingAfterReset`: **UNCHANGED**。設定変更専用短縮天井は確認されない。
- `stateAfterReset`: 設定変更時に**ステージ変更などなし**。高確/低確等の朝一専用状態は確認されない。
- `resetBenefits`: **宵越し天井狙いが成立**。設定変更でも前日天井進捗を保持。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONのみは直接確定できず。
- `resetDetection`: 設定変更によるステージ変化なし。ガックン/初期出目/表示等は **UNVERIFIED_AFTER_RESEARCH**。
- `advantageousSectionReset`: **NOT_APPLICABLE**。

### 主要出典 — 552（取得日 2026-09-04）

- HAZUSE: `https://hazuse.com/machine/pachislot/0S0999/genre/201/`
- K-Navi: `https://p-kn.com/slot/1379/`
- Seven Peace旧解析保存ページ: `https://www.mb.ccnw.ne.jp/seven-peace.com/rokudenasi/rokudenasi_brues.html`
- パチマガスロマガ公式アーカイブ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/127/sammy_slot_127.php`

## conflicts / 注意

- HAZUSE基本スペックのボーナス合成表は設定6部分に表示崩れがあり `1/287.4` と読めるが、同ページのBIG/MIDDLE系列、K-Navi、旧解析資料は **1/117.8〜1/117.9** で整合。表示崩れ値は採用しない。
- BIG設定1はK-Navi `1/268.5`、HAZUSE/旧解析 `1/268.6` の丸め差。

## 今回のGitHub更新

- 552追加: `docs/real_machine_db/machines/2011-02-18_pachislot-rokudenashi-blues.md`
- 552 machine record commit: `b86337fdd0c0bc208c0357eb79a5b6ab497bd343`
- LATEST_HANDOFF: 本更新

## 遡及QA継続地点

- **怪胴王 (`docs/real_machine_db/machines/2006-11_kaidouou.md`) まで補完済み**を維持。
- `2006-11-27_thunder-v-special.md` は既にresetBehavior収集済みであるため重複QA対象外。
- QA済み範囲は推測で動かさず、machine treeを日付/パス順に直接確認して最初のresetBehavior欠損から再開する。

## 次回再開地点

1. **recordCount 552 / chronologicalFrontier 2011-02-18**。最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 552レコードを再取得。
2. **2011-02-19〜20の境界監査**を行い、漏れがなければ2011-02-21同日群へ進む。
3. 2/21の強い既知候補は **パチスロ真・三國無双（オリンピア） / 戦国BASARA2（エンターライズ） / シオサイマックス-30（パイオニア）**。すべてrepo存在確認を行って最古未登録から処理する。
4. `シオサイマックス-30` はグリーンべるとで **2月21日から九州地区限定納品予定**。4月10日から全国納品予定という後続記事もあるため、地域限定初回導入と全国発売を混同せず記録する。
5. `パチスロ真・三國無双` は当時業界記事で2月20日納品開始予定、別資料で2月21日ホール導入を確認済み。納品日/稼働日を分離する。
6. `戦国BASARA2` はK-Naviで2011-02-21ホール導入開始を確認済み。
7. 30KD具体日はQA候補として保持するが、月粒度未確定を理由に本線を止めない。
8. PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・シリーズ・設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間を変えて横断後のみ維持。競合は平均せずCONFLICT。
