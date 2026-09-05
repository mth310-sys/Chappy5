# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **688**
- latestMachineAdded: **ニューワンバー-30**（ベルコ）
- latestRecord: `docs/real_machine_db/machines/2012-10-01_new-onebar-30.md`
- chronologicalFrontier: **2012-10-01**
- frontierLatestExactDateMachine: **ニューワンバー-30**
- schema: **resetBehavior v0.7**
- status: **CLOSED_2012-10-01_GROUP__NEXT_2012-10-09_GROUP**

## 今回の同期・時系列監査

- 最新mainの `README.md`、正本ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前最新レコード `2012-09-24_tropicana-30.md` を確認して開始。
- `INDEX.md` は初期19件時点で止まっているため、README規則どおり最新 `LATEST_HANDOFF.md` の recordCount 687 / chronologicalFrontier 2012-09-24 を進捗正本として採用。
- 前handoff指定の2012-09-25〜09-30境界を追加検索し、同期間に本線へ追加すべき別機種の確実な具体日根拠は今回確認できず。09-24群CLOSEDを維持して10月へ前進。
- repo検索で「ニューワンバー」は未登録を確認し、688件目として追加。
- 導入日は資料競合あり。K-Naviおよび前handoffで確認済みALL7.jpは2012-10-01、HAZUSEとパチスロ解析ガイドは2012-09-24、パチビーは2012-09-18、5号機クロニクルは2012年9月、後年整理ブログは2012年10月リリース。平均化せず `CONFLICT_RELEASE_DATE` として保持し、本線キーは前handoff/K-Navi/ALL7.jpに合わせ2012-10-01。
- 2012-10-01同日群について、K-Navi、一般新台カレンダー、メーカー別2012年一覧等を追加監査。今回、ニューワンバー-30以外に10/01具体日で本線へ追加すべきパチスロを確定できなかったため10-01群をCLOSED。
- 次の既知具体日群は2012-10-09。前handoffのALL7.jp確認に加えK-Navi等でも同日機が確認できるため、次回は10-09群から時系列継続。

## 今回の本線追加 — ニューワンバー-30

### 識別

- manufacturer: **ベルコ**
- releaseDate key: **2012-10-01**（資料競合あり）
- generation: **5号機**
- systemType: **ART / BR非搭載 / CZ / 沖スロ / ゲーム数上乗せ+継続抽選**
- medalDiameter: **30φ**
- modelName: **ニューワンバーE-30**
- approvalNumber: **2S0635**

### 性能コア

- 機械割: **96.5 / 98.5 / 100.5 / 103.0 / 106.0 / 110.0%**
- ART初当り: **1/232.69 / 227.06 / 221.51 / 218.33 / 212.93 / 200.85**
- ビッグワンバーボーナス（BAR揃い/遠吠えフリーズ）: **全設定1/16384**
- ART「ワンバーボーナス」: **1セット最低33G+α、純増約+2.0枚/G**
- 赤カウントダウン7継続率: **67～90%**
- 黄カウントダウン7: ART期待度約**20%**
- 通常天井: **ART終了後990G** → 黄カウントダウン7経由で天井ART
- P-WORLDは300G台に仮天井/チャンスがあると記載。設定変更専用短縮とは分離。
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**。機種名/型式/メーカーと50枚・1000円・ベース・コイン持ち等を組み替えたが直接解析値を確定できず。後継2017年機の値は流用していない。

### CONFLICT

- 導入日:
  - パチビー: **2012-09-18**
  - HAZUSE: **2012-09-24**
  - パチスロ解析ガイド: **2012-09-24～**
  - 5号機クロニクル: **2012年9月**
  - K-Navi: **2012-10-01**
  - ALL7.jp: **2012-10-01導入予定**（前handoff確認）
  - 後年整理ブログ: **2012年10月リリース**
  - 地域差/予定・全国導入/DB日付等の由来を確定できないため平均せず全て保持。本線キーは2012-10-01。

## resetBehavior v0.7

- `settingChangeBehavior`: **UNVERIFIED_AFTER_RESEARCH**
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH**
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**
- `gameCounterReset`: **UNVERIFIED_AFTER_RESEARCH**
- `ceilingAfterReset`: **UNVERIFIED_AFTER_RESEARCH**（通常天井990Gは確定、設定変更専用短縮値なし）
- `modeAfterReset`: **UNVERIFIED_AFTER_RESEARCH**
- `stateAfterReset`: **UNVERIFIED_AFTER_RESEARCH**
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**
- `resetBenefits`: **NONE_CONFIRMED_AFTER_RESEARCH**
- `resetPenalties`: **NONE_CONFIRMED_AFTER_RESEARCH**
- `resetDetection`: **UNVERIFIED_AFTER_RESEARCH**
- `publicMorningNumbers`: **NONE_CONFIRMED_AFTER_RESEARCH**
- 当時天井攻略記事は本機の宵越しを「宵越し?」と疑問符付きで記載しており、据え置き時の990Gカウンタ引継ぎ根拠には採用しない。
- 「ニューワンバー-30 / ニューワンバー30 / ニューワンバー1-30 / ニューワンバーE-30 / ベルコ」と設定変更/リセット/朝一/据え置き/宵越し/電源OFF ON/天井/CZ/ガックンを組み替え、当時解析・古いDB・回顧資料を横断したが、本機固有の設定変更契約は直接確定できなかったため推測補完なし。

## 遡及resetBehavior QA 進捗

- 前handoffから継続するQA再開地点は変更しない。
- 遡及QA次回再開地点: **`docs/real_machine_db/machines/2007-01_karate-baka-ichidai.md`**。
- 本線時系列収集を止めず、QAは別リレーで既存レコードのresetBehavior欠損のみ補完する。

## 次回再開地点

1. **recordCount 688 / chronologicalFrontier 2012-10-01 / 10-01群CLOSED** から開始。
2. **2012-10-02〜10-08境界を最終監査**してから、2012-10-09同日群へ進む。
3. 10-09群の未処理候補をrepo重複確認し、時系列/一覧上の順番を監査して1件ずつ追加する。前handoffで確認済み候補は **「ドラゴンハナハナ-30」「パチスロキン肉マン キン肉星王位争奪編」「パチスロ喰霊-零-」「南国育ちinハワイ」「大工の源さん～炎のいただき!編」**。
4. パイオニア公式はドラゴンハナハナ-30を2012年10月発売と確認。K-Naviはキン肉マン キン肉星王位争奪編を2012-10-09導入と確認。各候補は必ずrepo重複・具体日・型式差を確認してから追加する。
5. 欠損は表記揺れ・型式・メーカー・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間等を組み替え、公式・業界・当時解析・古いDB・アーカイブ・回顧資料を横断後のみUNVERIFIED。競合値は平均せずCONFLICT。

## 主要出典 — 取得日 2026-09-05

### ニューワンバー-30
- K-Navi: `https://p-kn.com/slot/1703/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6870`
- HAZUSE: `https://hazuse.com/machine/pachislot/2S0635/`
- パチスロ解析ガイド: `https://www.pachislot-guide.net/2012/new-onebar-one-30/`
- パチビー: `https://www.pachibee.jp/machines/about/212080003`
- 5号機クロニクル ベルコ: `https://5goki.com/bellco`
- pacnk: `https://pacnk.com/slot/tools/sh_newwanba.html`
- 当時天井攻略: `https://macerate.seesaa.net/article/294561990.html`
- pachinko’s blog: `https://pachinko.hatenablog.jp/entry/2012/10/newOneBar-30`

### 次回境界/アンカー
- パイオニア2012製品一覧: `https://www.slot-pioneer.co.jp/products/2012.html`
- K-Navi キン肉マン キン肉星王位争奪編: `https://p-kn.com/slot/1704/`

## GitHub commits

- ニューワンバー-30 machine record: `2588485f23c6a69fc86a8f6da9e72d463ace0c6b`
