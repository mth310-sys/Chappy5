# 実機DB 最新リレー引継ぎ

更新日: 2026-09-08

## 現在地点

- recordCount: **919**
- latestRecordAdded: **Zゴールド・インフィニティ**（NET / ネット）
- latestRecordAddedPath: `docs/real_machine_db/machines/2015-10-05_z-gold-infinity.md`
- chronologicalFrontier: **2015-10-05**
- frontierLatestMachine: **Zゴールド・インフィニティ**
- frontierRecord: `docs/real_machine_db/machines/2015-10-05_z-gold-infinity.md`
- schema: **resetBehavior v0.7**
- status: **2015-10-05_GROUP_OPEN**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、No.918 `2015-10-05_bayonetta.md` を再読。
- INDEXは19件時点の旧集約状態。README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- No.918時点の次候補「Zゴールドインフィニティ」をGitHub既存検索し、未登録を確認してNo.919として追加。
- 書き込み直前にLATEST_HANDOFFを再取得し、recordCount 918 / Zゴールドインフィニティ未処理のままで同期競合がないことを確認。

## No.919 — Zゴールド・インフィニティ

- record: `docs/real_machine_db/machines/2015-10-05_z-gold-infinity.md`
- manufacturer: **NET（ネット）**
- releaseDate canonical: **2015-10-05**
- generation/system: **5号機 AT / 差枚数管理型・周期/確率変動型抽選**
- formalModelName: **ゼットゴールドインフィニティNC**（単一流通資料確認）
- inspectionNumber: **UNVERIFIED_AFTER_RESEARCH**

### performanceCore

- 機械割: **97.0 / 98.7 / 100.6 / 102.9 / 106.6 / 111.5%**。
- AT初当たり: **1/491 / 1/470 / 1/450 / 1/424 / 1/393 / 1/350**。
- 50枚ベース: canonical **約45.4G/50枚**。別当時資料に45.7G/1000円があり軽微差として保持。
- AT純増: **約3.0枚/G**。
- Z-RUSH: **初期100枚以上**の差枚数管理型。
- Z図柄揃い: **500枚保証 + 100枚上乗せ90%ループ**。
- 通常天井: **30周期到達でAT**。1周期10〜99G、平均約57Gで、約1700G換算は目安として扱う。

### resetBehavior v0.7

- 設定変更時の周期天井進捗RESET/CARRY、モード/状態再抽選: **UNVERIFIED_AFTER_RESEARCH**。
- 据え置き時の周期天井進捗・状態持越し: **UNVERIFIED_AFTER_RESEARCH**。
- 純電源OFF→ON時の周期天井進捗・状態/表示: **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更専用短縮天井/短縮周期: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 朝一専用モード/具体振り分け/特定G内当選率: **UNVERIFIED_AFTER_RESEARCH / NONE_CONFIRMED_AFTER_RESEARCH**。
- 本機固有ガックン/初期出目/ステージによる確定・高信頼変更判別: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- 一般的な5号機AT機、NET前後機種からは補完していない。

### conflicts

- `RELEASE_DATE_2015-09-28_VS_2015-10-05`
  - 2015-10-05: ちょんぼりすた、すろぱちくえすと等が実導入として記載。
  - 2015-09-28: イチカツに全国導入開始予定、別解析にも導入日表記。
  - 予定/地域先行/納品工程差の可能性を完全分離できないためCONFLICT保持。DB本線は10-05群キューと複数実導入資料に合わせ **2015-10-05** をcanonical。
- `BASE_GAMES_PER_50_MINOR_DIFFERENCE`: 約45.4G vs 45.7G。平均化せず保持。

## 2015-10-05群 — OPEN

処理済み:
1. **パチスロ ルパン三世 ロイヤルロード～金海に染まる黄金神殿～** — オリンピア / 平和 — No.917。
2. **パチスロ ベヨネッタ** — Sammy — No.918。
3. **Zゴールド・インフィニティ** — NET — No.919。

既知未処理候補:
4. **サイレントヒル**。
5. **クジラッキー**。

- No.916マクロスF2 Bonus Live ver.には2015-10-05表記資料もあるが、2015-09-28 canonical recordの日付工程差として既に保持。10-05群で重複追加しない。
- Zゴールド・インフィニティには09/28資料もあるため競合をレコードに保持し、重複レコードは作らない。
- 同日群は未処理候補が残るため **OPEN**。

## 次回再開地点

1. **recordCount 919 / chronologicalFrontier 2015-10-05 / 10-05_GROUP_OPEN** から開始。
2. README / mission v0.7 / INDEX / LATEST_HANDOFF / No.919を再確認。
3. 次の未処理候補 **「サイレントヒル」** を既存レコード検索・正式表記/メーカー/導入日確認後に処理する。
4. 続いて **クジラッキー** を確認し、全メーカー横断再監査後のみGROUP_CLOSED判定する。
5. resetBehaviorは設定変更・据え置き・純電断を分離し、欠損は表記揺れ/型式/メーカー/シリーズ名と検索語・資料系統変更後のみUNVERIFIEDとする。
6. 遡及resetBehavior QAカーソルは新規本線を止めず、2007-03-19長州力より後の最初の既存未QAレコード探索を継続する。

## safeguard

- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- main先行レコードを発見した場合は重複作成しない。
- `COMPLETE_CORE` と `resetBehaviorQA` を別管理する。
- 設定変更・据え置き・純電断を自動で同義扱いしない。
- 前作/後継機・同メーカー他機のresetBehaviorを流用しない。
- 競合値は平均せず `CONFLICT` / 定義差として双方保持。
- 検定告示 / 発表 / 納品 / 地域先行 / 全国導入を分離する。

## 主要出典 — 取得日 2026-09-08

### No.919 Zゴールド・インフィニティ
- P-WORLD: https://www.p-world.co.jp/machine/database/7822
- すろぱちくえすと解析まとめ: https://www.slopachi-quest.com/kisyubetsu/zgold-infinity-kishubetu/
- すろぱちくえすと天井/スペック: https://www.slopachi-quest.com/article/zgold-infinity/
- すろぱちくえすと打ち方/Z揃い: https://www.slopachi-quest.com/article/zgold-infinity-reel/
- ちょんぼりすた: https://chonborista.com/slot/net-slot/11836/
- イチカツ: https://ichikatsu.com/zgi-tenjou/
- 当時解析補助: https://slotnews777.blog.fc2.com/blog-entry-2479.html
- 型式名補助: https://store.shopping.yahoo.co.jp/nakaiticom/592.html
- 中古実機DB補助: https://slot-kakaku.com/zetgold/
- 当時試打動画: https://www.youtube.com/watch?v=lEW3hsIw-nU

## confidence

- exactReleaseDate: CONFLICT_2015-09-28_VS_2015-10-05_CANONICAL_10-05
- manufacturer/system: ANALYSIS_HIGH_MULTI_SOURCE
- formalModelName: ANALYSIS_SINGLE
- inspectionNumber: UNVERIFIED
- performanceCore: ANALYSIS_HIGH_MULTI_SOURCE
- baseGamesPer50: ANALYSIS_HIGH_WITH_MINOR_DIFFERENCE
- normalCeiling: ANALYSIS_HIGH_MULTI_SOURCE
- settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
- purePowerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- resetNumericData: UNVERIFIED_AFTER_RESEARCH
- advantageousSectionReset: NOT_APPLICABLE
- resetDetection: NONE_CONFIRMED_AFTER_RESEARCH
