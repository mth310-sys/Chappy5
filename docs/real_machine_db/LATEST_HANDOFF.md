# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **911**
- latestRecordAdded: **パチスロ聖闘士星矢-女神聖戦-**（三洋物産 / SANYO）
- latestRecordAddedPath: `docs/real_machine_db/machines/2015-09-07_saint-seiya-megami-seisen.md`
- chronologicalFrontier: **2015-09-07**
- frontierLatestMachine: **パチスロ聖闘士星矢-女神聖戦-**
- frontierRecord: `docs/real_machine_db/machines/2015-09-07_saint-seiya-megami-seisen.md`
- schema: **resetBehavior v0.7**
- status: **2015-09-07_GROUP_CLOSED_FOR_CURRENT_RESEARCH**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、No.910 `2015-09-07_hokuto-no-ken-tomo.md` を再読。
- INDEXは19件時点の旧集約状態のため、README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時handoffは **910件 / 2015-09-07 / 09-07_GROUP_OPEN**。
- 前リレーの次の未処理機種「パチスロ聖闘士星矢-女神聖戦-」を調査しNo.911として追加。
- 2015-09-07同日群を導入日一覧、業界/当時解析、機種DBで再監査し、No.910「パチスロ北斗の拳 強敵」とNo.911以外に全国実ホール導入日を09-07として具体日固定できる未登録5号機を今回追加発見できなかったため、**2015-09-07_GROUP_CLOSED_FOR_CURRENT_RESEARCH** とした。

## No.911 — パチスロ聖闘士星矢-女神聖戦-

- record: `docs/real_machine_db/machines/2015-09-07_saint-seiya-megami-seisen.md`
- manufacturer: **三洋物産 / SANYO**
- formalModelName: **パチスロ聖闘士星矢女神聖戦KD**
- inspectionNumber: **5S0239**
- systemType: **5号機 A+ART / ボーナス+ART / 技術介入要素あり**
- canonical releaseDate: **2015-09-07**
- K-Navi当時内覧会記事、HAZUSE、パチビーで09-07導入を照合。
- 市場/通常手順機械割 canonical: **97.0 / 98.8 / 100.0 / 102.8 / 105.2 / 109.0%**。
- 別資料は **96.9 / 98.7 / 99.9 / 102.8 / 105.1 / 109.0%**。平均せず `STANDARD_PAYOUT_ROUNDING_CONFLICT` として保持。
- 完全攻略時機械割は別定義として **102.8 / 105.7 / 107.9 / 110.3 / 111.4 / 115.4%**。
- BIG: **1/407.1 → 1/372.4**、REG: **1/662.0 → 1/546.1**、ART初当たり: **1/593.3 → 1/360.5**。
- 50枚ベース: **約32G**。
- ART「女神聖戦」: **1セット50G+α / 約1.5枚/G**。
- BIG約**204枚**、REG約**48枚**。
- 通常天井: **ボーナス間1180G → ART当選**。ART当選だけではボーナス間天井カウンタをリセットしない。

### resetBehavior v0.7

- 設定変更: **ボーナス間1180G天井RESET / 内部モード再抽選**。
- 据え置き: **ボーナス間天井進捗CARRYOVER**として宵越し対象。
- 純電源OFF→ON: 当時の設定変更/電源ON-OFF対照表で **天井G数CARRYOVER / 内部モードCARRYOVER**。
- 朝一ステージ: 設定変更・電源ON-OFFとも **星矢ステージ**。ステージ単独では変更判別不可。
- リセット専用短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更後も1180Gを0から再カウント。
- 通常時ART抽選状態: **低確 / 高確 / 天国 / 超天国**。
- 設定変更時専用の初期モード振り分け: **UNVERIFIED_AFTER_RESEARCH**。
- RT状態等の設定変更/純電断別の独立契約: **UNVERIFIED_AFTER_RESEARCH**。通常時内部構造から推測転記しない。
- 朝一専用の保証CZ・当選率・高モード率等: **NONE_CONFIRMED_AFTER_RESEARCH / UNVERIFIED_AFTER_RESEARCH**。
- 朝一不利: 設定変更で前日のボーナス間天井ハマリ進捗を消失。
- 本機固有ガックン: 表記・型式・設定変更/リセット/朝一/据え置き/電源ON-OFF等で再探索したが信頼できる直接資料を固定できず **NONE_CONFIRMED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

## conflicts / definition separation

1. `STANDARD_PAYOUT_ROUNDING_CONFLICT`
   - HAZUSE / 5号機クロニクル: **97.0 / 98.8 / 100.0 / 102.8 / 105.2 / 109.0%**。
   - ちょんぼりすた系: **96.9 / 98.7 / 99.9 / 102.8 / 105.1 / 109.0%**。
   - 平均せず双方保持。
2. `FULL攻略_IS_SEPARATE_DEFINITION_NOT_CONFLICT`
   - **102.8 / 105.7 / 107.9 / 110.3 / 111.4 / 115.4%**は技術介入前提の完全攻略値であり、通常手順機械割と統合しない。

## 2015-09-07群 — CLOSED_FOR_CURRENT_RESEARCH

処理済み:
1. **パチスロ北斗の拳 強敵** — サミー — No.910。
2. **パチスロ聖闘士星矢-女神聖戦-** — 三洋物産 — No.911。

- 同日を全メーカー横断で再監査し、今回追加で全国実ホール導入日09-07を具体日固定できる未登録5号機を確認できなかったためCLOSED。

## 次回再開地点

1. **recordCount 911 / chronologicalFrontier 2015-09-07 / 09-07_GROUP_CLOSED_FOR_CURRENT_RESEARCH** から開始。
2. README / mission v0.7 / INDEX / LATEST_HANDOFF / No.911を再確認。
3. **2015-09-08～2015-09-13境界を飛ばさず監査**し、具体日付きの未登録5号機があれば先に処理する。
4. 境界に追加がなければ、強い既知候補 **2015-09-14 アクロス「キングジャック」** の導入日を公式・業界・当時解析で再照合し、性能コア + resetBehavior v0.7を収集する。
5. 09-14群も候補だけで閉じず、処理後に全メーカー横断監査する。
6. 遡及resetBehavior QAカーソルは `docs/real_machine_db/machines/2007-03-19_kakumei-senshi-choshu-riki.md` を維持。新規本線を止めない。

## safeguard

- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- main先行レコードを発見した場合は重複作成せずhandoffを同期する。
- 設定変更・据え置き・純電断を自動で同義扱いしない。
- 通常遊技中の保持情報を営業日跨ぎ契約へ無条件転記しない。
- 前作/後継機のresetBehaviorを流用しない。
- 競合資料は平均・恣意的統合せずCONFLICTとして保持。
- 検定告示 / 発表 / 納品 / 導入予定 / 地域先行 / 全国実ホール導入を分離する。
- 朝一設定推測数値と設定変更判別を混同しない。

## 主要出典 — 取得日 2026-09-07

### No.911 パチスロ聖闘士星矢-女神聖戦-
- K-Navi 内覧会速報: https://p-kn.com/topics/exhibition/1381/
- HAZUSE: https://hazuse.com/machine/pachislot/5S0239/
- パチビー: https://www.pachibee.jp/machines/lecture/215070009
- パチマガスロマガ 機種概要: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/26/sanyo_slot_26.php
- パチマガスロマガ 概要: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/26/a.php
- パチマガスロマガ ART「女神聖戦」: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/26/03.php
- ちょんぼりすた: https://chonborista.com/slot/sanyo-slot/10433/
- すろぱちくえすと: https://www.slopachi-quest.com/article/seintoseiya-atenaseisen/
- 5号機クロニクル 三洋物産: https://5goki.com/sanyo

## confidence

- identity/release: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE
- performanceCore: ANALYSIS_HIGH_MULTI_SOURCE
- standardPayout: CONFLICT_ROUNDING_WITH_MULTI_SOURCE_CANONICAL
- full攻略Payout: ANALYSIS_HIGH_MULTI_SOURCE_SEPARATE_DEFINITION
- resetBehavior ceiling/mode/powerCycle: ANALYSIS_HIGH
- resetSpecificNumericBenefits: UNVERIFIED_AFTER_RESEARCH
- resetDetectionGakkun: NONE_CONFIRMED_AFTER_RESEARCH
