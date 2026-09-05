# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **668**
- latestMachineAdded: **スーパー5**（ウィンネットテクノロジー / WINNET TECHNOLOGY、P-WORLD・5号機クロニクルではネイチャー・アセスメント分類）
- latestRecord: `docs/real_machine_db/machines/2012-07-02_super5.md`
- chronologicalFrontier: **2012-07-02**
- frontierLatestExactDateMachine: **スーパー5**
- schema: **resetBehavior v0.7**
- status: **OPEN_2012-07-02__NEXT_SAME_DAY_GARO_DENSETSU_SOGEKI**

## 今回の同期・時系列監査

- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「セブンバー30」を確認して開始。
- INDEXは旧地点19件のままなので、README規定どおりLATEST_HANDOFFと実レコードを正本化。開始時は recordCount 667 / frontier 2012-06-25。
- 2012-06-25同日群を再監査し、セブンバー30以外の具体日付き未登録5号機を今回確定できなかったため同日群を閉鎖。
- 2012-06-26～07-01境界も検索語を変えて監査し、先に処理すべき具体日付き未登録機を確定できず。
- K-Navi 2012年7月導入カレンダーの2012-07-02群へ進み、先頭候補「スーパー5」はrepo未登録を確認して668件目として追加。
- 次候補「餓狼伝説☆双撃」もrepo検索で未登録を確認済み。2012-07-02同日群は未閉鎖。

## 今回の本線追加 — スーパー5

### 識別

- manufacturer: **ウィンネットテクノロジー / WINNET TECHNOLOGY**（K-Navi・当時資料） / **ネイチャー・アセスメント**（P-WORLD・5号機クロニクル分類）
- modelName: **UNVERIFIED_AFTER_RESEARCH**
- approvalNumber: **UNVERIFIED_AFTER_RESEARCH**
- releaseDate: **2012-07-02**
- releaseDateNotes: K-Naviは全国一斉導入開始日2012-07-02。当時業界系資料は納品予定2012-07-01～。納品日/ホール導入日の定義差として分離。
- generation: **5号機**
- systemType: **ART専用 / ボーナス非搭載 / 4段階設定（1・3・4・6）**

### 性能コア

- 主機械割: **97.71 / 101.22 / 107.23 / 112.91%**（設定1/3/4/6）
- 別PAYOUT系列: **96.52 / 100.00 / 106.01 / 111.71%**（同一パチマガスロマガ内別ページ、条件差未確定のためCONFLICT）
- ART初当り・順押し: **1/873 / 1/770 / 1/623 / 1/508**
- ART初当り・逆押し: **1/1763 / 1/1556 / 1/1259 / 1/1029**
- 50枚ベース: **約32.38G**（パチマガスロマガ単一当時解析、1000円あたり表記）
- ART「スーパー5」: **1セット250G / 約500枚 / 純増約2.0枚/G**
- 継続率: **順押し50% or 80%、逆押し80%確定**

### resetBehavior v0.7

- `settingChangeBehavior`: **UNVERIFIED_AFTER_RESEARCH**
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH**
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**
- `gameCounterReset`: **UNVERIFIED_AFTER_RESEARCH**
- `ceilingAfterReset`: **UNVERIFIED_AFTER_RESEARCH**
- `modeAfterReset`: **UNVERIFIED_AFTER_RESEARCH**
- `stateAfterReset`: **UNVERIFIED_AFTER_RESEARCH**
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**
- `resetBenefits`: **NONE_CONFIRMED_AFTER_RESEARCH**
- `resetPenalties`: **NONE_CONFIRMED_AFTER_RESEARCH**
- `resetDetection`: **UNVERIFIED_AFTER_RESEARCH**
- `publicMorningNumbers`: **NONE_CONFIRMED_AFTER_RESEARCH**

### resetBehavior品質メモ

- 「スーパー5 / スーパー５ / WINNET / ウィンネット / ウィンネットテクノロジー / ネイチャー・アセスメント」に「設定変更 / リセット / 朝一 / 朝イチ / 据え置き / 宵越し / 電源OFF ON / 電断 / 天井 / 天井短縮 / モード / 状態 / ガックン / 50枚 / 1000円」を組み替えて再探索。
- K-Navi、P-WORLD、パチマガスロマガ、5号機クロニクル、pacnk、当時業界系記事を横断。
- パチマガスロマガの本機トップに「天井・ヤメ時」「朝イチ・設定変更」専用項目の存在は確認できるが、現存検索本文から具体的設定変更/据え置き/電源OFF→ON処理を回収できなかった。
- 項目の存在だけから値を推測せずUNVERIFIED。通常ゲーム性としてのCZ/超CZ/ART終了後引き戻しとリセット挙動も混同しない。

## CONFLICT / 品質メモ

- payoutRate: P-WORLD・パチマガスロマガ主ページ・当時資料は **97.71/101.22/107.23/112.91%**。パチマガスロマガ別ページに **96.52/100.00/106.01/111.71%**。条件差未確定のため平均せずCONFLICT。
- manufacturerName: K-Navi・当時資料はウィンネット/WINNET TECHNOLOGY、P-WORLD・5号機クロニクルはネイチャー・アセスメント分類。製造/販売/ブランド関係を一次資料で確定できず両表記を保持。
- baseGamesPer50: 約32.38Gは当時解析1系統で直接値を取得したため `ANALYSIS_SINGLE_PERIOD_SITE`。

## 次回再開地点

1. **recordCount 668 / chronologicalFrontier 2012-07-02**から開始。
2. **2012-07-02同日群を継続**。最優先はrepo未登録確認済み **餓狼伝説☆双撃（SNKプレイモア）**。
3. その後、同日群を飛ばさず以下を順に重複確認・未登録処理。
   - アイドルマスターライブインスロット（Sammy）
   - めぞん一刻～夏色の風と～（オリンピア）
   - 天空のシンフォニア ～光を求めて～（コルモ）
4. 2012-07-02同日群を完全に閉じてから07-03以降へ進む。
5. 次の既知K-Navi具体日アンカーは **2012-07-09 シンデレラブレイド（ネット）**。
6. 「夜王」は2012-06には戻さず、既存handoff方針どおり2012年8月地点で再監査。
7. 欠損は表記揺れ・型式名・メーカー名・シリーズ名と、設定変更/リセット/朝一/据え置き/宵越し/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間/50枚を組み替えて再探索。競合は平均せずCONFLICT。

## 遡及resetBehavior QA 次回再開地点

- 既存遡及QA到達地点 **ドカベンDまで補完済み**を維持。
- 次候補 `docs/real_machine_db/machines/2006-12_linda-no-neraiuchi.md`。
- 既にresetBehavior節があれば飛ばし、次の実在欠損へ進む。
- 本線新規収集を止めない。既存性能コアやCONFLICTを無駄に再調査・改変しない。

## 主要出典 — 取得日 2026-09-05

- K-Navi 2012年7月導入カレンダー: `https://p-kn.com/calendar/201207/`
- P-WORLD スーパー5: `https://www.p-world.co.jp/machine/database/6749`
- パチマガスロマガ スペック: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/winnet_slot/14/a.php`
- パチマガスロマガ ART確率・PAYOUT: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/winnet_slot/14/h.php`
- パチマガスロマガ 別PAYOUT: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/winnet_slot/14/h-1.php`
- パチマガスロマガ 小役/1000円G: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/winnet_slot/14/c.php`
- パチマガスロマガ 機種トップ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/winnet_slot/14/winnet_slot_14.php`
- 5号機クロニクル ネイチャー・アセスメント: `https://5goki.com/nature-assessment`
- 5号機クロニクル ウィンネット: `https://5goki.com/winnet`
- 当時業界系スペック記事: `https://ameblo.jp/slostar/entry-11262681060.html`
- pacnk: `https://pacnk.com/slot/tools/sh_superfive.html`

## GitHub commits

- スーパー5 machine record: `3032bff822164eec9e9622ec7c07973be7c7df1a`
