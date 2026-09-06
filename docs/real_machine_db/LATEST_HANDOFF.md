# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **814**
- latestRecordAdded: **ニューペガサス**（エマ）— 2014-04-21
- latestRecord: `docs/real_machine_db/machines/2014-04-21_new-pegasus.md`
- chronologicalFrontier: **2014-04-21**
- frontierLatestMachine: **ニューペガサス**
- schema: **resetBehavior v0.7**
- status: **2014-04-21_GROUP_CLOSED_FOR_CURRENT_RESEARCH / NEW_PEGASUS_ADDED**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前レコード `2014-04-21_midoridon-viva2.md` を再読して正本化。
- 作業開始時の正本は **813件 / 2014-04-21 緑ドンVIVA2 / 04-21_GROUP_OPEN**。
- INDEXは旧19件集約のままなのでREADME規定に従い、より新しい `LATEST_HANDOFF.md` と実レコードを進捗正本として継続。
- 04/21群最後の未処理機 **ニューペガサス（エマ）** を814件目として追加。

## 今回追加 — ニューペガサス

### identity / 性能コア

- manufacturer: **エマ**。
- hall start: **2014-04-21**。K-NaviとHAZUSEで一致。
- formalModelName: **ニューペガサス**、検定番号 **3S1253**（HAZUSE）。
- generation/system: **5号機 / ノーマル / 完全告知 / BIG+REG**。
- BIG: **1/239.18 / 237.45 / 235.74 / 234.06 / 232.40 / 230.76**。
- REG: **1/481.88 / 409.60 / 360.09 / 318.14 / 287.44 / 260.06**。
- 合算: **1/159.84 / 150.31 / 142.47 / 134.85 / 128.50 / 122.27**。
- baseGamesPer50: **31.51 / 31.70 / 31.90 / 32.10 / 32.30 / 32.51G**（単一解析資料値）。
- BIG約 **311枚**、REG約 **111枚**。当時業界記事と解析資料で一致。
- 天井: **非搭載**。
- coreStatus: **COMPLETE_CORE**。

### payout CONFLICT

- source family A: **96 / 98 / 100 / 103 / 105 / 108%**（2-9伝説）。
- pacnk: **98 / 98 / 100 / 103 / 105 / 108%**。
- source family B: **97.6 / 99.5 / 101.2 / 103.0 / 104.7 / 106.5%**（けんのスロットシミュレーション）。
- 単なる丸めでは説明できないため平均せず **CONFLICT_PAYOUT_RATE** として全系列を保持。

### resetBehavior v0.7

- settingChangeBehavior: 本機固有RAM処理は十分再探索後も **UNVERIFIED_AFTER_RESEARCH**。
- carryOverBehavior: 据え置きで引き継ぐゲーム数天井・AT/ART/CZモードは **NOT_APPLICABLE_CONFIRMED**。その他内部状態は **UNVERIFIED_AFTER_RESEARCH**。
- powerCycleBehavior: 本機固有の電源OFF→ON時RAM/告知状態処理は **UNVERIFIED_AFTER_RESEARCH**。
- gameCounterReset: **NOT_APPLICABLE_NO_GAME_COUNT_CEILING**。
- ceilingAfterReset: **NOT_APPLICABLE_NO_CEILING**。専用短縮天井 **NONE_CONFIRMED_AFTER_RESEARCH**。
- modeAfterReset: ゲーム数解除/AT/ART/CZモードは **NOT_APPLICABLE**。朝一専用モード **NONE_CONFIRMED_AFTER_RESEARCH**。
- stateAfterReset: 朝一狙いへ影響する内部高確/状態は **NONE_CONFIRMED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- resetBenefits: 短縮天井/CZ/モード優遇等 **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetPenalties: 天井進捗消失は **NOT_APPLICABLE**。その他 **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetDetection: ガックン/初期ランプ等は **UNVERIFIED_AFTER_RESEARCH**。
- publicMorningNumbers: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetBehaviorQA: **PARTIAL_NO_PERSISTENT_CEILING_OR_MODE_CONFIRMED**。

## 2014-04-21群監査

- K-Navi 2014年4月全国一斉導入カレンダー掲載の同日パチスロ4機:
  - 喧嘩祭
  - マジックモンスター3 ぶっちぎり!魔界グランプリ
  - 緑ドンVIVA2
  - ニューペガサス
- 4機すべて処理済み。
- K-Navi同月カレンダー上、04/22〜04/30に追加パチスロ導入掲載なし。
- status: **2014-04-21_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。
- 次の具体日境界は **2014-05-07**。K-Naviでは **パチスロ ロストアイランド（Sammy） / パチスロ マクロスフロンティア2（SANKYO）** を確認。

## 遡及 resetBehavior QA — PSアドリブ王子

- 対象: `docs/real_machine_db/machines/2007-02_ps-adlib-ouji.md`。
- 既存 `coreStatus: COMPLETE_CORE / resetBehaviorQA: PARTIAL` を維持。
- 「PSアドリブ王子 / アドリブ王子 / PSアドリブ王子VB / 三洋物産」×「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 昇格チャンス / 1111G / 天井 / ガックン」を再探索。
- P-WORLD、グリーンべると当時記事、旧パチマガスロマガ等では通常の昇格チャンス仕様は再確認できたが、**設定変更・据え置き・電断時の昇格チャンス/1111G救済カウンタ処理を直接固定する新規根拠なし**。
- したがって性能側COMPLETE_COREを崩さず、resetBehaviorQAは **PARTIAL / UNVERIFIED_AFTER_RESEARCH相当**を維持。推測補完なし。
- Git履歴上、PSアドリブ王子追加コミット直後の次機種追加は **`docs/real_machine_db/machines/2007-03-04_pachislot-abarenbo-shogun.md`（パチスロ暴れん坊将軍）**。次回QAカーソルとして固定。

## safeguards / definitions

- ニューペガサスの機械割競合は平均しない。
- 2016年「ニューペガサスR」、旧「ニューペガサスブラック」等の別仕様の機械割・設定示唆・リセット情報を2014年3S1253へ混入しない。
- ノーマル機で天井・AT/ART/CZが非該当でも、本機固有の設定変更/電断RAM挙動を一般論から自動推定しない。
- 既存 `COMPLETE_CORE` は性能コア完了として維持し、resetBehavior QA状態を別管理する。

## 次回再開地点

1. **recordCount 814 / chronologicalFrontier 2014-04-21 / 04-21_GROUP_CLOSED_FOR_CURRENT_RESEARCH** から開始。
2. **2014-04-22〜05-06境界をメーカー/業界系でも再監査**。
3. 漏れがなければ次の具体日 **2014-05-07** へ進み、候補は **パチスロ ロストアイランド → パチスロ マクロスフロンティア2**。
4. 05/07群追加後、同日群をメーカー横断再監査してCLOSED判定。
5. 遡及resetBehavior QAは **`docs/real_machine_db/machines/2007-03-04_pachislot-abarenbo-shogun.md`** から継続。
6. 2015-06-08到達時の **吉宗～極～（ヨシムネH2A4 / 3S1093）** 正式量産版処理注意は維持。

## 主要出典 — 取得日 2026-09-06

### ニューペガサス
- HAZUSE: `https://hazuse.com/machine/pachislot/3S1253/`
- K-Navi: `https://p-kn.com/slot/2037/`
- K-Navi 2014年4月カレンダー: `https://p-kn.com/calendar/201404/`
- 娯楽産業: `https://www.goraku-sangyo.com/%E3%82%A8%E3%83%9E%EF%BC%8F%E3%83%9A%E3%82%AC%E3%82%B5%E3%82%B9%E3%82%B8%E3%83%A3%E3%83%91%E3%83%B3%E3%80%80%E6%96%B0%E6%A9%9F%E7%A8%AE%E3%80%8C%E3%83%8B%E3%83%A5%E3%83%BC%E3%83%9A%E3%82%AC%E3%82%B5/`
- pacnk: `https://pacnk.com/slot/2010/pegasusw/top.php`
- けんのスロットシミュレーション: `https://kenslo65536.com/kaiseki/new-pegasus.html`
- 2-9伝説: `https://29den.com/newpegasus/`
- 中一商事: `https://www.nakaiti.com/html/Ema001.html`

### 次境界
- K-Navi 2014年5月カレンダー: `https://p-kn.com/calendar/201405/`

### PSアドリブ王子 QA
- P-WORLD: `https://www.p-world.co.jp/machine/database/4565`
- グリーンべると/P-WORLD業界ニュース: `https://news.p-world.co.jp/articles/2027/greenbelt`
- パチマガスロマガ旧攻略: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/04/a.php`
- Git history: PSアドリブ王子追加 `acf77175cba962d5077b3c657f0e306c4eb876d5` → relay advance `104453f651835a50390704e0cb12773ec5a40e0c` → 次機種追加 `ccb7b789371cf566adf9a77c461efca8d2239cf3`。