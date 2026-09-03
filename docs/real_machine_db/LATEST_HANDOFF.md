# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **504**
- latestMachineAdded: **アベノ橋魔法☆商店街**（ビスティ / exact導入日CONFLICT、時系列主値2010-08-23）
- latestRecord: `docs/real_machine_db/machines/2010-08-23_abenobashi-mahou-shotengai.md`
- chronologicalFrontier: **2010-08-23**
- frontierLatestMachine: **アベノ橋魔法☆商店街**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、前線503実レコード「ワイルドキャッツ」を再取得。
- `INDEX.md` は旧19件地点のため、README規定どおり最新 `LATEST_HANDOFF.md`＋main実レコードを進捗正本として使用。
- 開始時正本地点は recordCount **503** / chronologicalFrontier **2010-08-23**。
- 8/23同日群と8/24境界を再監査し、未登録「アベノ橋魔法☆商店街」を発見。repo検索で既存レコードなしを確認して504件目として追加。
- 導入日はSANKYO公式/フィールズが2010年8月、HAZUSEが2010-08-16、当時解析ブログが最速ホール導入日2010-08-23、パチビーが2010-08-24で競合。日付を平均・消去せずCONFLICTとして全根拠を保存し、時系列主値のみ2010-08-23とした。
- exact date conflictを理由に前線を8/24へ進めず、chronologicalFrontierは2010-08-23を維持する。

## 504 — アベノ橋魔法☆商店街 要約

- メーカー: **ビスティ**
- 公式販売名/型式名: **アベノ橋魔法商店街Ａ**（SANKYO公式）。HAZUSEは**アベノ橋魔法商店街S**とするため型式名差はCONFLICT。
- 検定番号: **0S0449**（HAZUSE）
- 世代/タイプ: **5号機 / A+ART / 30G ART / CZ / 無限ART「陰陽師モード」**
- 機械割: **97.2 / 99.1 / 101.2 / 104.9 / 109.5 / 115.1%**
- BIG: **1/402.1 / 1/390.1 / 1/385.5 / 1/374.5 / 1/364.1 / 1/348.6**
- REG: **1/434.0 / 1/425.6 / 1/407.1 / 1/392.4 / 1/372.4 / 1/358.1**
- PC: **全設定1/4096.0**
- ボーナス合算: **1/198.6 / 1/193.9 / 1/188.9 / 1/183.1 / 1/176.2 / 1/169.3**
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**。表記揺れ・型式・メーカー＋50枚/1000円/ベース/コイン持ち/千円回転で資料系統を変えて再探索し、直接値を確定できず。小役から逆算しない。
- ART: **30G / 約+1.2枚/G**
- BIG約**252枚**、REG約**63枚**、PC約**14枚**
- 通常ゲーム数天井: **1000G** → 次回ボーナスまでのART。
- ボーナス後ART非突入回数型天井はHAZUSE **2〜5回の規定回数**、パチビー **6連続**でCONFLICT。
- coreStatus: **COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL_RELEASE_DATE_AND_CEILING_COUNT_CONFLICT_BASE_UNVERIFIED**

## resetBehavior v0.7 — アベノ橋魔法☆商店街

- **設定変更**: HAZUSEで、通常1000G天井のゲーム数進捗は**クリアされず引継ぎ**。一方、ボーナス後ART非突入回数型天井の進捗は**クリア**。その他CZ/ART/内部状態は直接資料を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- **据え置き**: CZ/ART/内部状態、ART残G・権利、回数型天井カウンタを一括して説明する本機固有資料は `UNVERIFIED_AFTER_RESEARCH`。1000Gカウンタについて「設定変更でも引継ぐ」事実から一般的据え置き挙動へ推論しない。
- **電源OFF→ON**: 1000G/回数型カウンタ、CZ/ART/内部状態、初期出目・液晶の単純電源断復帰は `UNVERIFIED_AFTER_RESEARCH`。
- **ゲーム数/天井**: 設定変更時、**1000Gカウンタ=RETAIN / ART非突入回数型カウンタ=CLEAR**。
- **リセット天井短縮**: 1000G天井の専用短縮は確認せず、既存進捗を引き継ぐ仕様。
- **モード/状態**: 設定変更専用モード振り分け・朝一専用モード・CZ/ART状態再抽選は `UNVERIFIED_AFTER_RESEARCH`。
- **有利区間**: **NOT_APPLICABLE**（5号機）。
- **朝一恩恵**: 設定変更されても1000G天井進捗が残るため、前日ハマリが朝一天井距離に影響し得る。
- **朝一不利**: ART非突入回数型天井の進捗は設定変更でクリア。
- **変更判別**: ガックン、初期出目、ランプ、液晶、CZ挙動等は表記揺れ・型式・メーカー＋朝一/設定変更/リセット/据え置き/電源OFF ONで再探索後も `UNVERIFIED_AFTER_RESEARCH`。
- **公開朝一数値**: normalGameNumberCeiling **1000G**、settingChangeNormalGameCounter **RETAIN**、settingChangeArtNonEntryCount **CLEAR**。リセット専用ART初当たり率/モード振り分けは確認できず。

## conflicts

- exact release date: HAZUSE **2010-08-16** / 当時解析ブログ **2010-08-23（最速ホール導入日）** / パチビー **2010-08-24**。公式は2010年8月まで。
- formal model: SANKYO公式 **アベノ橋魔法商店街Ａ** / HAZUSE **アベノ橋魔法商店街S**。
- ART非突入回数型天井: HAZUSE **2〜5回** / パチビー **6連続**。
- REG設定2: HAZUSE/P-WORLD系 **1/425.6** / 単一当時解析ブログ **1/453**。主値は複数一致する1/425.6、競合値も保持。

## resetBehavior 遡及QA — 継続地点

- `2006-11_jack-to-mamenoki.md` までv0.7遡及追加済み、という既存正本進捗を維持。
- `2006-11-27_thunder-v-special.md` は既にresetBehaviorありのため重複QAしない。
- ジャックと豆の木直後かつresetBehavior欠損の最初の実レコードは、次回以降recursive tree / commit history / 実ファイルpathで順序を確定してからパッチする。
- 新規機種の時系列前進は止めない。

## 主要出典（取得日 2026-09-04）

### アベノ橋魔法☆商店街
- SANKYO公式オンラインミュージアム: `https://www.sankyo-fever.jp/collection/872/`
- HAZUSE: `https://hazuse.com/machine/pachislot/0S0449/`
- パチビー: `https://www.pachibee.jp/machines/index/210060008`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6047`
- K-Navi: `https://p-kn.com/slot/1255/`
- P-Mans / 当時業界紹介: `https://p-mans.blogspot.com/2010/07/`
- フィールズ2010年資料: `https://www.tsuburaya-fields.co.jp/ir/j/files/press/2010/press_20101104a.pdf`
- 当時解析ブログ: `https://slotkaiseki777.blog102.fc2.com/blog-entry-936.html`
- P-WORLD掲示板（導入時期補助）: `https://www.p-world.co.jp/sp/search_kisyubbs.cgi?code=&group_id=3511&mode=thread_list&page=1`

## 今回のGitHub更新

- 504 アベノ橋魔法☆商店街追加: commit `58d29737c02181c3c3afc229b367830933471686`
- LATEST_HANDOFF更新: このコミット

## 次回再開地点

1. **recordCount 504 / chronologicalFrontier 2010-08-23**。開始時は必ず最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコードを再取得。
2. 504のexact導入日CONFLICTは新しい一次/当時高信頼資料が出ない限り再調査で時間を使わず保持する。
3. **2010-08-24〜2010-08-29**を日付境界監査する。特に旧導入カレンダー上の8/27候補を再確認し、最古の未登録5号機があれば505件目とする。
4. 8/24〜29を閉じられた場合、現時点で確認できている次の強いアンカーは **2010-08-30「デビルマンⅡ ～悪魔復活～」**（エレコ）。repo未登録確認後、より古い候補がない場合のみ追加する。
5. 504のreset後続QAは、単純電源OFF→ON、据え置き時の回数型カウンタ/CZ/ART状態、ガックン/初期出目等の変更判別、設定変更専用モード/状態数値の新資料が見つかった場合のみ追補。既存性能コアをやり直さない。
6. 遡及QAは `2006-11_jack-to-mamenoki.md` 直後の実ファイルpath確定から再開し、既にresetBehavior済みの `2006-11-27_thunder-v-special.md` はスキップする。
