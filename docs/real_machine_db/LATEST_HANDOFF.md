# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **818**
- latestRecordAdded: **メイドルナイト**（JIN）— 2014-05-19
- latestRecord: `docs/real_machine_db/machines/2014-05-19_maidol-knight.md`
- chronologicalFrontier: **2014-05-19**
- frontierLatestMachine: **メイドルナイト**
- schema: **resetBehavior v0.7**
- status: **2014-05-19_GROUP_OPEN / MAIDOL_KNIGHT_ADDED**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`docs/real_machine_db/LATEST_HANDOFF.md`、直前レコード `docs/real_machine_db/machines/2014-05-07_samurai-champloo-ryuten-rinne.md` を再読して正本化。
- INDEXは旧19件集約のままなのでREADME規定に従い、より新しい `LATEST_HANDOFF.md` と実レコードを進捗正本として継続。
- 作業開始時の正本は **817件 / chronologicalFrontier 2014-05-12 / 05-12_GROUP_CLOSED_WITH_RELEASE_DATE_CONFLICT / 05-13〜05-18境界CLOSED**。
- handoff指定の次の未処理 **メイドルナイト（JIN）— 2014-05-19** を818件目として追加。
- K-Navi 2014年5月全国一斉導入カレンダーでは05-19群は **メイドルナイト / ハイサイ蝶特急ターボ** の2機。メイドルナイト処理後も同日群はOPEN。

## 今回追加 — メイドルナイト

### identity / 性能コア

- manufacturer: **JIN**。
- formalModelName: **メイドルナイト**。
- inspectionNumber: **3S1208**（P-WORLD）。
- hall start: **2014-05-19**（K-Navi全国一斉導入開始日）。JIN公式更新履歴の **2014-05-10発売** はメーカー発売日として分離。
- generation/system: **5号機 / AT / 疑似ボーナス+CZ / ゲーム数管理**。
- payoutRateBySetting: **97.4 / 98.5 / 101.4 / 106.5 / 111.3 / 116.8%**。P-WORLDと5号機クロニクル一致。
- AT初当たり: **1/347.7 / 335.5 / 311.9 / 282.4 / 253.7 / 218.8**（P-WORLD）。
- baseGamesPer50: **UNVERIFIED_AFTER_RESEARCH**。表記揺れ・型式・メーカー・50枚/1000円/ベース/コイン持ち等を変え複数系統を横断後も安全な直接値を固定できず。
- netIncrease: **約2.9枚/G**。P-WORLDと2014年当時ホール試打記事で一致。
- AT「海援TIME」: **30G+α**。疑似BIG: **30〜300G**。CZ「懲罰チャレンジ」: **10G / 20G / AT当選まで**。
- 通常最大天井: **AT間1280G**。P-WORLDでは到達時AT+BIG+(超)討幕決戦確定。
- coreStatus: **PARTIAL_CORE_BASE_UNVERIFIED**。

### resetBehavior v0.7

- settingChangeBehavior: 設定変更時のRAM処理、天井Gリセット/引継ぎを直接明記した本機固有資料は十分再探索後も **UNVERIFIED_AFTER_RESEARCH**。
- carryOverBehavior: 据え置き時の天井G・規定Gモード・CZ状態の引継ぎ契約は **UNVERIFIED_AFTER_RESEARCH**。
- powerCycleBehavior: 設定変更なし電源OFF→ON時の天井G・モード・内部状態は **UNVERIFIED_AFTER_RESEARCH**。
- gameCounterReset: 設定変更 / 据え置き / 電源再投入の各契約とも **UNVERIFIED_AFTER_RESEARCH**。
- ceilingAfterReset: 通常最大1280G。設定変更専用の短縮天井/短縮規定Gは **NONE_CONFIRMED_AFTER_RESEARCH**。通常1280G進捗クリア自体も直接契約未確認なので推定しない。
- modeAfterReset: 通常時に(超)天国モードは存在するが、設定変更時のモード再抽選/引継ぎ・専用振り分けは **UNVERIFIED_AFTER_RESEARCH**。
- stateAfterReset: CZ高確等を含む内部状態契約は **UNVERIFIED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- resetBenefits: 専用天井短縮/天国優遇/CZ優遇等 **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetPenalties: 天井進捗消失自体が未確認のため確定的不利として保存せず、その他 **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetDetection: 本機固有ガックン/初期出目/液晶/前兆位置による変更判別契約は **NONE_CONFIRMED_AFTER_RESEARCH**。
- publicMorningNumbers: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetBehaviorQA: **PARTIAL_AFTER_MULTI_FAMILY_RESEARCH**。

### 通常128G値の取り扱い

- パチ＆スロ必勝本にAT終了後の **128G以内解除期待度（CZ込み）= 設定1〜6で40.63 / 41.76 / 47.16 / 50.01 / 55.99 / 60.98%** が存在。
- これは **AT終了後の通常モード値**であり、設定変更専用の朝一数値ではない。publicMorningNumbersへ誤転記しない。

## conflicts / safeguards

- JIN公式 **2014-05-10発売** とK-Navi **2014-05-19全国一斉導入開始**は定義差。releaseDateはホール導入日2014-05-19とし、メーカー発売日はidentity補助として保持。
- AT終了後128G以内解除期待度を「朝一128G解除率」と誤読しない。
- 2012年JIN「夜勤病棟壱」や他社メイド系機種のresetBehaviorを混入しない。
- P-WORLDの天井恩恵は通常天井性能であり、リセット専用恩恵へ流用しない。

## 2014-05-19群

K-Navi全国一斉導入カレンダー掲載パチスロ:
1. **メイドルナイト**（JIN）— No.818 / 処理済み
2. **ハイサイ蝶特急ターボ**（タイヨー）— **次の未処理**

- status: **2014-05-19_GROUP_OPEN**。

## 次回再開地点

1. **recordCount 818 / chronologicalFrontier 2014-05-19 / 05-19_GROUP_OPEN** から開始。
2. 次の未処理は **ハイサイ蝶特急ターボ（タイヨー）— 2014-05-19**。
3. 処理後、05-19同日群を全メーカー横断再監査し、漏れがなければCLOSED。
4. その後05-20〜05-25境界を再監査し、次のK-Navi具体日候補 **2014-05-26 B-MAX（アクロス） / 麻雀格闘倶楽部（KPE） / パチスロ御伽屋HANZO（タイヨーエレック）** へ進む。
5. 遡及resetBehavior QAカーソルは `docs/real_machine_db/machines/2007-03-04_pachislot-abarenbo-shogun.md` を維持。
6. 2015-06-08到達時の **吉宗～極～（ヨシムネH2A4 / 3S1093）** 正式量産版処理注意は維持。

## 主要出典 — 取得日 2026-09-07

### 境界 / 導入日
- K-Navi 2014年5月全国一斉導入カレンダー: `https://p-kn.com/calendar/201405/`

### メイドルナイト
- JIN公式 — 製品情報/更新履歴: `https://www.jin-777.co.jp/index.html`
- P-WORLD — 型式/検定番号/AT初当たり/機械割/純増/AT・BIG・CZ/天井: `https://www.p-world.co.jp/machine/database/7390`
- 5号機クロニクル — その他メーカー5号機一覧/機械割: `https://5goki.com/others`
- パチ＆スロ必勝本 — AT終了後128G以内解除期待度: `https://p.hisshobon.jp/machine/2399/1/46387`
- man-soft 天井一覧 — 導入日/AT間最大1280G: `https://smaslo.man-soft.com/slot-tenzyou-itiran/`
- コンサートホール成増 当時試打記事 — AT機/疑似ボーナス/純増2.9枚/G: `https://ameblo.jp/concerthall-narimasu/entry-11848484044.html`