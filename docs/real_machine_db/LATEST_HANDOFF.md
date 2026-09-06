# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **845**
- latestRecordAdded: **ドリームジャンボ ～幸福のチケットを君に～**（JPS）— 2014-09-29
- latestRecord: `docs/real_machine_db/machines/2014-09-29_dream-jumbo.md`
- chronologicalFrontier: **2014-09-29**
- frontierLatestMachine: **ドリームジャンボ ～幸福のチケットを君に～**
- schema: **resetBehavior v0.7**
- status: **2014-09-29_GROUP_OPEN**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`、`docs/real_machine_db/INDEX.md`、`docs/real_machine_db/LATEST_HANDOFF.md`、844件目 `2014-09-22_slot-batman.md` を再読。
- INDEXは19件表記の旧集約状態のため、README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時の正本は **844件 / 2014-09-22 / 09-22_GROUP_CLOSED / 09-23〜09-28_CLOSED**。
- 09-29群を監査し、通常の次候補 **JPS「ドリームジャンボ ～幸福のチケットを君に～」** をNo.845として登録。
- machine record commit: `33c7fd7db809e785decaf59768bb6ca80cf93df9`。

## 今回追加 — ドリームジャンボ ～幸福のチケットを君に～

### identity / 性能コア

- manufacturer: **JPS**。
- hall start: **2014-09-29**（K-Navi、パチビー）。
- PiDEA Xは納品日 **2014-09-28予定** としており、納品日とホール導入開始日を分離。
- 型式: **ドリーム幸福のチケットを君にジャンボBB**。
- 数字形式の検定番号: `UNVERIFIED_AFTER_RESEARCH`。
- type: **5号機 / AT / 擬似ボーナス / 完全告知**。
- 設定構成: **1 / 2 / J / 4 / 5 / 6**。設定3なし。
- 機械割（メーカー発表値）: **97.19 / 98.66 / J非公表 / 99.86 / 108.89 / 112.95%**。
- AT初当たり（メーカー発表値）: **1/297.65 / 276.03 / J非公表 / 263.60 / 178.45 / 145.87**。
- baseGamesPer50: **約32G/50枚**。
- AT純増: **約3.0枚/G**。
- ジャンボーナス: **初期33G以上**。
- 第1天井: **AT間767G+前兆 / 約60%でAT**。
- 第2天井: **AT間1466G+前兆 / AT確定 + ファイアー高確率**。
- 通常時は **モード/状態の概念なし**。毎ゲームAT抽選は一定とする当時解析を採用。
- coreStatus: **COMPLETE_CORE_WITH_SOURCE_LIMITS_AND_SOURCE_CONFLICT**。

### setting J / 数値定義

- PiDEA Xの当時発表会記事は設定Jを開発担当者説明として **「期待度150%（出玉率は非公表）」** と記載。
- パチマガスロマガのメーカー発表表でも設定JのPAYOUT/AT初当たりは **非公表**。
- よって「150%」を機械割へ転記せず、定義を分離して保存。

### initial-hit CONFLICT

- パチマガスロマガのメーカー発表値: 設定1 **1/297.65**。
- 複数資料も約1/297.6で一致。
- スロパチクエスト機種まとめのみ設定1 **1/279.65** と掲載し、他設定はメーカー表と一致。
- 平均せず `CONFLICT_SOURCE_TYPO_SETTING1_AT_279_65_VS_MANUFACTURER_297_65` として保持。canonicalはメーカー発表値1/297.65。

## resetBehavior v0.7 — ドリームジャンボ

- 設定変更時: **AT本前兆からスタートする可能性**あり。該当時は**AT初期ゲーム数が優遇**。
- 設定変更後の初回AT初当たり時、**25%で「おはようございます」ボイス**。発生時は設定変更確定扱いの当時解析。
- ショートフリーズ発生率: **通常1/419.45 → 設定変更時1/202.93**。
- リセット本前兆スタート率: `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更時の767G/1466G内部天井カウンタ処理: `UNVERIFIED_AFTER_RESEARCH`。リセット恩恵の存在からRESETを推測しない。
- 据え置き時の天井内部G/前兆等: `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更なし電源OFF→ON: `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更後だけの固定短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。本前兆スタートと固定短縮天井を混同しない。
- 通常時はモード/状態の概念なしのため、通常モード/高低状態の再抽選は `NOT_APPLICABLE_NO_NORMAL_MODE_STATE_CONCEPT`。設定変更時の本前兆スタートは例外的な朝一特殊挙動として分離。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- 固定的リセット不利: **NONE_CONFIRMED_AFTER_RESEARCH**。
- ガックン/初期出目/初期ステージ確定判別: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 公開朝一数値: **ボイス25%、ショートフリーズ1/202.93（通常1/419.45）**。
- resetBehaviorQA: **COMPLETE_WITH_SOURCE_LIMITS**。

## 2014-09-29群 — 現在OPEN

### 登録済み

- **ドリームジャンボ ～幸福のチケットを君に～**（JPS）No.845

### 同日未処理 — 戦律のストラタス

- KONAMI公式ブログで **新潟県内のみ2014-09-29から先行稼働開始**、**全国稼働は2014-10-06から** と明記。
- 本DBの時系列は「確認できた実ホール稼働開始」を漏らさないため、09-29群候補から落とさない。
- 次回レコードでは日付を混同せず、少なくとも以下を明示する:
  - `regionalEarlyHallStart: 2014-09-29 (Niigata only)`
  - `nationwideHallStart: 2014-10-06`
- releaseDate主値を地域先行の2014-09-29とする場合も、`releaseDatePrecision: regional_early_hall_start` 等で全国導入ではないことを必ず残す。
- **No.846最優先候補**。

### 同日/境界要監査 — バビロン(with桜丘ショコラ)

- HAZUSEは **2014-09-29導入開始 / 型式バビロンA / 検定番号4S0663** と掲載。
- 一方、2014-08-27の業界記事（日刊アミューズメント/PiDEA）は **納品日2014-10-05予定**、後年当時系記事は **2014-10-06導入開始** とする。
- これは導入日競合として平均せず保持する必要がある。09-29群CLOSED前に公式/当時一次・地域先行・納品/全国導入の定義を再精査する。
- 現時点では `DATE_CONFLICT_2014-09-29_VS_2014-10-06_WITH_2014-10-05_DELIVERY_PLAN` 候補。

## 遡及 resetBehavior QA カーソル

- 次: `docs/real_machine_db/machines/2007-02_new-hanahana-30.md`（ニューハナハナ-30）。
- 新規収集を止めず、本線と並行して1件ずつ前進する。

## safeguard

- 設定Jの「期待度150%」を機械割150%として扱わない。
- ドリームジャンボの設定1初当たり1/279.65表記を、メーカー発表1/297.65と平均しない。
- リセット本前兆の存在から天井カウンタRESETを推定しない。
- 据え置き観測が見つからない限り純電断/据え置き契約を一般論で埋めない。
- 09-29の戦律のストラタスは「新潟県先行稼働」と「全国稼働」を分離する。
- バビロンは09-29/10-06を平均・一方的上書きせず、納品日10-05も別定義で保持する。
- P-WORLD等の最終更新日を導入日に使用しない。
- 2015-06-08到達時の **吉宗～極～（ヨシムネH2A4 / 3S1093）** 正式量産版処理注意を維持。

## 次回再開地点

1. **recordCount 845 / chronologicalFrontier 2014-09-29 / 09-29_GROUP_OPEN** から開始。
2. 最新mainで README / mission / INDEX / LATEST_HANDOFF / 845件目を再確認。
3. **KONAMI「戦律のストラタス」**をNo.846最優先候補として、性能コア + resetBehavior v0.7を収集。新潟先行2014-09-29と全国2014-10-06を必ず分離。
4. 続いて **バビロン(with桜丘ショコラ)** の09-29/10-06日付競合を公式・当時業界・古いDBで再精査し、09-29群に含めるか確定。
5. 09-29群の全メーカー最終監査後にCLOSED判定し、09-30以降へ時系列前進。
6. 遡及QAは **`2007-02_new-hanahana-30.md`** から再開。

## 主要出典 — 取得日 2026-09-07

### ドリームジャンボ
- パチマガスロマガ 機種概要: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jps_slot/29/a.php`
- パチマガスロマガ AT初当たり/PAYOUTメーカー発表値: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jps_slot/29/h-1.php`
- パチマガスロマガ AT突入フロー/モード・状態なし: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jps_slot/29/l.php`
- K-Navi: `https://p-kn.com/slot/2112/`
- パチビー: `https://www.pachibee.jp/machines/about/214090000`
- PiDEA X 発表会記事: `https://www.pidea.jp/articles/JPS%E3%80%8C%E3%83%89%E3%83%AA%E3%83%BC%E3%83%A0%E3%82%B8%E3%83%A3%E3%83%B3%E3%83%9C%E3%80%8D%E3%81%AF%E6%9C%80%E5%A4%A7AT%E3%82%B2%E3%83%BC%E3%83%A0%E6%95%B010000G%21%3F`
- スロパチクエスト 朝一設定変更: `https://www.slopachi-quest.com/article/dream-jumbo-reset/`
- スロパチクエスト 天井/スペック: `https://www.slopachi-quest.com/article/dream-jumbo-tenzyo/`
- スロパチクエスト 機種まとめ（設定1初当たり表記競合）: `https://www.slopachi-quest.com/kisyubetsu/dream-jumbo/`
- 楽スロ 天井/コイン持ち回顧: `https://rakuslo.com/dreamjabo-tenjyo.html`

### 次候補 / 境界
- KONAMI公式 戦律のストラタス新潟先行: `https://www.konami.com/amusement/psm/portal/magihallo/blog_mh/2014/mhs_blog_140922.html`
- バビロン HAZUSE: `https://hazuse.com/machine/pachislot/4S0663/`
- バビロン 日刊アミューズメント/PiDEA: `https://www.nikkansports.com/amusement/pachinko/news/f-pp-tp0-20140827-1357347.html`
