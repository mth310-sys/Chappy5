# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **898**
- latestRecordAdded: **パチスロ魔法少女リリカルなのは**（三洋物産）
- latestRecordAddedPath: `docs/real_machine_db/machines/2015-07-21_pachislot-mahou-shoujo-lyrical-nanoha.md`
- chronologicalFrontier: **2015-07-21**
- frontierLatestMachine: **パチスロ魔法少女リリカルなのは**
- frontierRecord: `docs/real_machine_db/machines/2015-07-21_pachislot-mahou-shoujo-lyrical-nanoha.md`
- schema: **resetBehavior v0.7**
- status: **2015-07-21_GROUP_OPEN**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.897 `2015-07-13_onigami7.md` を再読。
- INDEXは19件時点の旧集約状態なので、README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時の正本は **897件 / 2015-07-13 / 07-13_GROUP_OPEN**。
- handoff指定の「パチスロ魔法少女リリカルなのは」導入日競合を当時業界記事・旧DB・導入カレンダーまで再監査。

## 2015-07-13群監査 — CLOSED_FOR_CURRENT_RESEARCH

処理済み:
1. **鬼神7** — No.897。

監査結果:
- 「パチスロ魔法少女リリカルなのは」は07/13 canonicalには採らない。
- グリーンべると2015-06-11業界記事: **ホール納品は2015-07-05から**。
- ALL7 / パチビー / パチ7: **2015-07-13**の導入予定・導入日表記。
- K-Navi: **全国一斉導入開始日2015-07-21**と明示。
- HAZUSE: **導入開始日2015-07-21**。
- 納品開始 / 導入予定 / 地域差 / 全国一斉導入を分離し、DB canonicalは2015-07-21。
- K-Navi全国一斉導入カレンダーで07/13のパチスロ枠は鬼神7のみ。今回の再探索でも07/13に追加すべき別未登録5号機を固定できなかったため **2015-07-13_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。

## 2015-07-14〜2015-07-20境界監査

- K-Navi全国一斉導入カレンダーは07/13→07/21へ直接進む。
- 「なのは」の07/13表記は上記イベント定義差として処理済み。
- この期間に具体的な全国ホール導入日を固定できる別未登録5号機を今回確認できず、**2015-07-14_TO_2015-07-20_CLOSED_FOR_CURRENT_RESEARCH**。

## No.898 — パチスロ魔法少女リリカルなのは

- record: `docs/real_machine_db/machines/2015-07-21_pachislot-mahou-shoujo-lyrical-nanoha.md`
- manufacturer: **三洋物産**
- formalModelName: **パチスロリリカルなのはKE**
- inspectionNumber: **5S0161**
- generation: **5号機**
- systemType: **ART / CZ-ART + ST-ART + BONUS-ART / 疑似ボーナス**
- canonical releaseDate: **2015-07-21**（全国一斉導入開始）

### 性能コア

- 機械割: **96.8 / 98.5 / 99.6 / 104.4 / 107.4 / 111.2%**。
- ART初当たり: **1/120.9 / 120.7 / 120.5 / 118.5 / 115.2 / 112.1**。
- 50枚ベース: **34.9〜35.0G**。
- ART純増: **約2.0枚/G**。
- 次元航行艦アースラ平均44.5G、セットアップチャンス6G、闇の書ZONE 40G（初回50G）。
- なのはBONUS約78/111/222枚、フェイトBONUS約78/111/333枚、はやてBONUS最大約666枚。

### resetBehavior v0.7

- 設定変更:
  - CZ間708G天井までのゲーム数 **リセット**。
  - CZスルー回数天井 **再抽選 / 最大8回**（通常最大11回）。
  - (超)高確 **再抽選**。
  - RT状態 **リセット**。
  - 液晶 **学校**。
- 電源OFF→ONのみ:
  - 天井ゲーム数 **引継ぎ**。
  - (超)高確 **引継ぎ**。
  - RT状態 **引継ぎ**。
  - 液晶は学校、ただしCZ/ART中は状態引継ぎ。
- 設定変更時内部状態:
  - 設1〜3: 通常B79 / 高確20 / 超高確1%。
  - 設4: 69 / 30 / 1%。
  - 設5: 65.89 / 33.11 / 1%。
  - 設6: 58 / 40 / 2%。
- 設定変更時CZスルー天井は0/2/4/5/6/8回の公開振り分けあり。詳細は機種レコードへ保存。
- 朝一判別:
  - 前日MB入賞状態→翌日1G目3枚掛けなら変更濃厚、2枚掛けなら据え置き濃厚（無対策条件）。
  - 前日CZスルー天井到達後→翌日最初の非ART CZがセットアップでなければ変更濃厚。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### conflicts / definition control

- `RELEASE_EVENT_DATE_DEFINITION_DIFFERENCE`: 07/05納品開始 / 07/13予定・一部DB導入日 / 07/21全国一斉導入開始。平均しない。
- `CZ_SLIP_COUNT_LABEL_OFF_BY_ONE_RISK`: 必勝本は規定回数を0/2/4/5/6/8回、一部攻略は利用者向けに1/3/5/6/7/9回相当で表示。意味を分離して保持。

## 2015-07-21群監査 — OPEN

処理済み:
1. **パチスロ魔法少女リリカルなのは** — 三洋物産 — No.898。

未処理の強い候補:
1. **イケイケマハロ-30** — 北電子。
   - K-Navi全国一斉導入カレンダーで **2015-07-21**。
   - 次回は正式表記/型式/性能コア/resetBehaviorを収集し、既存レコード重複を確認してNo.899候補として処理する。
2. **めんそーれ-25** — エマ。
   - ALL7は **2015-07-21**。
   - K-Naviの同日全国一斉導入カレンダーには表示されないため、ホール導入日を別系統で固定してから登録可否を決定する。

## 次回再開地点

1. **recordCount 898 / chronologicalFrontier 2015-07-21 / 07-21_GROUP_OPEN** から開始。
2. 最新mainの README / mission / INDEX / LATEST_HANDOFF / No.898を再確認。
3. **北電子「イケイケマハロ-30」**を最優先候補として、既存重複確認→正式型式→性能コア→resetBehavior v0.7を収集。
4. 続いて **エマ「めんそーれ-25」**の07/21導入日を業界/当時解析/旧DBで再監査。
5. 07/21同日群を全メーカー横断で最終監査し、追加がなければCLOSED後07/22以降へ前進。
6. 遡及resetBehavior QAカーソルは `docs/real_machine_db/machines/2007-03-19_kakumei-senshi-choshu-riki.md` を維持。新規本線を止めない。

## safeguard

- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- 設定変更・据え置き・純電断を自動で同義扱いしない。
- 同名/近似名・前作/後継機のresetBehaviorを流用しない。
- 競合資料は平均・恣意的統合せずCONFLICTとして保持。
- P-WORLDの最終更新日を導入日として採用しない。
- 検定告示 / 発表 / 納品予定 / 地域先行 / 全国実ホール導入を分離する。

## 主要出典 — 取得日 2026-09-07

### No.898 パチスロ魔法少女リリカルなのは
- グリーンべると / P-WORLD業界ニュース: https://news.p-world.co.jp/articles/7537/greenbelt
- K-Navi機種: https://p-kn.com/slot/2285/
- K-Navi 2015年7月導入カレンダー: https://p-kn.com/calendar/201507/
- HAZUSE: https://hazuse.com/machine/pachislot/5S0161/
- ALL7: https://www.all7.jp/plans/index/2015/07
- パチビー: https://www.pachibee.jp/machines/index/215060003
- パチ＆スロ必勝本 天井&設定変更: https://p.hisshobon.jp/machine/2594/1/53044
- パチ＆スロ必勝本 CZスルー回数天井: https://p.hisshobon.jp/machine/2594/1/53394
- パチ＆スロ必勝本 状態移行抽選: https://p.hisshobon.jp/machine/2594/1/53086
- パチ＆スロ必勝本 朝イチ判別: https://p.hisshobon.jp/machine/2594/1/53135
- パチマガスロマガ 50枚ベース: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/25/c.php
- ちょんぼりすた: https://chonborista.com/slot/sanyo-slot/8922/
