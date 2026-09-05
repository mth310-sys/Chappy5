# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **678**
- latestMachineAdded: **夜王**（ビスティ）
- latestRecord: `docs/real_machine_db/machines/2012-08-06_yaoh.md`
- chronologicalFrontier: **2012-08-06**
- frontierLatestExactDateMachine: **夜王**
- schema: **resetBehavior v0.7**
- status: **OPEN_2012-08-06__NEXT_USAGI_YASEI_NO_TOUHAI_THEN_MIRACLE_MARINE_AND_SAME_DAY_AUDIT**

## 今回の同期・時系列監査

- 最新mainのREADME全文、正本ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「マイジャグラーII」を確認して開始。
- INDEXは旧地点19件のまま。README規定どおり、より新しいLATEST_HANDOFFと実レコードを進捗正本として使用。開始時は recordCount 677 / frontier 2012-07-30 / 07-30群CLOSED。
- 2012-07-31〜2012-08-05境界を検索し、今回の探索範囲では具体日付き未登録5号機を確定できず。次の既知具体日2012-08-06へ前進。
- LATEST_HANDOFF指定の「夜王」をrepo検索し未登録を確認して678件目として追加。
- SANKYOオンライン博物館は2012.08導入、フィールズ系資料は2012年8月ホール設置予定、当時解析DBは2012-08-06導入開始とするため時系列キーを2012-08-06とした。
- 08-06同日群を追加監査し、少なくともニューギン「兎-野性の闘牌-」と三洋物産「パチスロ海物語ミラクルマリン」が2012-08-06ホール導入開始であることをK-Naviで確認。したがって08-06群はOPENのまま次回へ引き継ぐ。

## 今回の本線追加 — 夜王

### 識別

- manufacturer: **ビスティ**
- releaseDate key: **2012-08-06**
- generation: **5号機**
- systemType: **A+ART / CZ / 規定ゲーム数天井**
- modelName: **夜王R**
- approvalNumber: **UNVERIFIED_AFTER_RESEARCH**

### 性能コア

- 機械割: **97.0 / 98.7 / 100.4 / 104.8 / 108.5 / 113.0%**
- ROMEO RUSH（ART）出現率: **1/198 / 184 / 196 / 146 / 190 / 122**。当時資料の定義名を維持し、純初当たりへ勝手に再定義しない。
- BIG: **全設定1/4096**
- PREMIUM BONUS: **全設定1/16384**
- ボーナス+ART合成: **1/186.7 / 173.8 / 184.6 / 140.0 / 179.9 / 117.7**
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**。機種名/型式/メーカーと50枚・1000円・ベース・コイン持ちを組み替え、複数資料系統を横断後も比較可能な直接値を確定できず。
- ART「ROMEO RUSH」: **1セット40G+α、純増約+2.3枚/G、最大80%ループ**
- BIG: **約200枚**、PREMIUM BONUS: **約50枚**
- 通常時規定ゲーム数は100G刻み。設定1〜5は最大1000G、設定6のみ1100G選択ありとする当時資料。P-WORLDは最大1100G+αで無限夜王CHALLENGEと整理。

### resetBehavior v0.7

- `settingChangeBehavior`: **CONFIRMED_PARTIAL**。設定変更時は天井ゲーム数リセット/消化Gクリア、ART当選状況クリア、内部モード/状態移行抽選。
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH_WITH_PERIOD_YOIKOSHI_X_REPORTS**。当時資料に「宵越し×」はあるが、純据え置き時の内部保持契約を一般論で補完しない。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONのみの天井/状態契約を直接確定できず。
- `gameCounterReset`: **RESET_ON_SETTING_CHANGE_CONFIRMED**
- `ceilingAfterReset`: **設定変更後100G天井が約30%**。P-WORLDと当時朝一資料で照合。
- `modeAfterReset/stateAfterReset`: **設定変更後約50%で高モード/高確スタート**とする当時資料あり。表記差は平均せず注記。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**
- `resetBenefits`: **100G天井約30% + 高状態約50%**
- `resetPenalties`: **前日の天井消化G/ART当選状況クリア**
- `resetDetection`: **朝一にレア小役なしで麗美・瞳ステージへ移行すると設定変更濃厚**とする当時資料。ガックン本機固有根拠は未確定。
- `publicMorningNumbers`: **100G天井約30% / 高状態約50%**

### 品質メモ

- 「高モード」と「高確」の表記が資料により揺れるため、通常時全モードテーブルへ拡張せず、朝一客行動に必要な50%高状態スタートのみ保持。
- 据え置きと電源OFF→ONは設定変更挙動から推測しない。
- 50枚ベース、検定番号、純電断契約、純据え置き契約、機種固有ガックンは十分な再探索後も未確定。

## 次回再開地点

1. **recordCount 678 / chronologicalFrontier 2012-08-06 / 08-06 group OPEN**から開始。
2. 最優先でニューギン **「兎-野性の闘牌-」**をrepo重複確認して処理する。K-Naviで2012-08-06導入開始を確認済み。
3. 次に三洋物産 **「パチスロ海物語ミラクルマリン」**を監査する。K-Naviで2012-08-06導入開始を確認済み。
4. その後も08-06全国導入群をK-Naviだけで閉じず、メーカー/業界記事/旧DBで残存候補を洗い、同日群をCLOSEDにしてから後日へ進む。
5. 欠損は表記揺れ・型式名・メーカー名・シリーズ名と設定変更/リセット/朝一/据え置き/宵越し/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間/50枚を組み替えて十分再探索してからUNVERIFIED。競合は平均せずCONFLICT。

## 遡及resetBehavior QA 次回再開地点

- 既存遡及QA到達地点 **ドカベンDまで補完済み**を維持。
- 次候補 `docs/real_machine_db/machines/2006-12_linda-no-neraiuchi.md`。
- 既にresetBehavior節があれば飛ばし、次の実在欠損へ進む。
- 本線新規収集を止めない。既存性能コアやCONFLICTを無駄に再調査・改変しない。

## 主要出典 — 取得日 2026-09-05

- SANKYOオンライン博物館 夜王: `https://www.sankyo-fever.jp/collection/877/`
- K-Navi 夜王: `https://p-kn.com/slot/1682/`
- P-WORLD 夜王: `https://www.p-world.co.jp/machine/database/6809`
- パチマガスロマガ スペック: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/bisty_slot/22/a.php`
- パチマガスロマガ ボーナス確率/PAYOUT: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/bisty_slot/22/h.php`
- パチマガスロマガ ARTフロー: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/bisty_slot/22/l.php`
- 夜王プレミアムファンサイト BONUS: `https://slot-yaoh.jp/bonus.html`
- 当時解析DB 導入日: `https://w.atwiki.jp/pachikaisekidata/pages/237.html`
- 天井ハイエナ生活 夜王解析: `https://macerate.seesaa.net/article/285355507.html`
- 天井ハイエナ生活 2012-09-29更新一覧: `https://macerate.seesaa.net/article/294837675.html`
- スロジキ 2012-09-05 朝一夜王: `https://plaza.rakuten.co.jp/surojiki/diary/201209050001/`
- K-Navi 兎-野性の闘牌-: `https://p-kn.com/slot/1677/`
- K-Navi パチスロ海物語ミラクルマリン: `https://p-kn.com/slot/1667/`

## GitHub commits

- 夜王 machine record: `55e801dd8381c1b5e33e31f94a3d9fccaa5a4609`
