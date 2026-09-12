# ニューゲッターマウス

machineName: ニューゲッターマウス
formalModelName: S／ニューゲッターマウス／CG
manufacturer: エレコ
inspectionCode: 1S1664
releaseDate: 2022-07-04
generation: 6.2号機
systemType: ノーマル / Aタイプ / 技術介入
recordNo: 1504
recordStatus: COMPLETE_CORE_WITH_PARTIAL_RESET_BEHAVIOR_V0_7

## payoutRateBySetting

### 市場予測 / 一般手順
- 設定1: 97.7%
- 設定2: 99.4%
- 設定5: 103.7%
- 設定6: 108.2%

### 完全攻略時
- 設定1: 100.2%
- 設定2: 102.0%
- 設定5: 106.5%
- 設定6: 111.1%

信頼度: HIGH（P-WORLD系業界記事 / パチビー / HAZUSE / 複数解析で一致）

## initialHitBySetting

### BIG
- 設定1: 1/240.9
- 設定2: 1/234.1
- 設定5: 1/215.6
- 設定6: 1/199.2

### REG
- 設定1: 1/252.1
- 設定2: 1/240.1
- 設定5: 1/221.4
- 設定6: 1/199.2

### ボーナス合算
- 設定1: 1/123.2
- 設定2: 1/118.5
- 設定5: 1/109.2
- 設定6: 1/99.6

信頼度: HIGH（業界発表 / P-WORLD / パチビー / HAZUSE / 一撃で一致）

## baseGamesPer50

- 約41G / 50枚（設定1、公表・主要解析の比較値）
- 解析サイトには設定差込みで約41.2〜44.9G/50枚とする値もあるが、物差しの共通比較値としては設定1約41G/50枚を採用。

信頼度: HIGH_CORE

## netIncrease

- NOT_APPLICABLE（ボーナスのみで出玉を増やすノーマルタイプ。AT/ART非搭載）

## basicPayout

- BIG BONUS: 最大225枚
- REG BONUS: 最大77枚を主要業界DB・必勝本・パチビー等が掲載
- 一撃は後年更新ページでREG「最大85枚」と掲載しており競合。平均せず `CONFLICT` として保持する。

## modeSpecificMinimumData

- 設定構成: 1 / 2 / 5 / 6 の4段階。
- A PROJECT系のノーマルタイプ。
- BB / RBのみで出玉を増やし、AT / ART / RTは非搭載。
- 天井機能非搭載。
- BIGは技術介入2回成功で最大225枚。
- REGは12回遊技または7回入賞で終了。
- 設定6のボーナス合算1/99.6は発表時にA PROJECT史上最高のボーナス確率として案内された。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: PARTIAL_RESEARCH_EXHAUSTED
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior

- 本機は天井・AT/CZ・通常時モードを持たないノーマル機のため、設定変更による天井短縮、AT/CZ初当たり優遇、朝一専用モードは **NOT_APPLICABLE**。
- 設定変更時の成立済みボーナスフラグ / 告知待ち状態 / リール初期挙動について、本機固有の直接資料は今回の再探索で固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 一般的なノーマル機挙動からの推測補完は行わない。

### carryOverBehavior

- 天井 / AT / CZ / 通常時モード: NOT_APPLICABLE。
- 据え置き時の成立済みボーナスフラグ / 告知待ち状態等について、本機固有の直接契約は `UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior

- 天井 / AT / CZ / 通常時モード: NOT_APPLICABLE。
- 設定変更なしの純電源OFF→ON時に成立済みボーナスフラグ / 告知待ち状態がどう扱われるかは、機種名・型式名・エレコ・A PROJECT・電源OFF ON等で再探索したが直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset

- 天井ゲーム数カウンタ: NOT_APPLICABLE（天井非搭載）。
- 朝一狙いに用いる内部天井G数は存在しない。

### ceilingAfterReset

- NOT_APPLICABLE（天井非搭載）。
- 設定変更専用の短縮天井なし。

### modeAfterReset

- NOT_APPLICABLE（AT/CZ用モード、朝一専用モードなし）。
- ボーナス抽選はノーマル機の各ゲーム抽選として扱い、通常モード移行表は物差しDB対象外。

### stateAfterReset

- AT/CZ内部状態: NOT_APPLICABLE。
- 本機固有の設定変更専用高確 / 朝一優遇状態は確認されず `NONE_CONFIRMED`。

### advantageousSectionReset

- NOT_APPLICABLE（本機はボーナス主体のノーマルタイプで、物差し上の有利区間管理ATとして扱わない）。
- 有利区間ランプを用いた朝一変更判別情報も確認されない。

### resetBenefits

- 設定変更専用の天井短縮: NOT_APPLICABLE。
- 設定変更専用のモード優遇 / CZ優遇 / 初当たり優遇: NONE_CONFIRMED。
- 公開された朝一専用数値: NONE_CONFIRMED。

### resetPenalties

- 設定変更固有の公開ペナルティ: NONE_CONFIRMED。

### resetDetection

- 本機固有のリールガックン、初期出目、ランプ状態などを用いる設定変更/据え置き判別は、`ニューゲッターマウス / Sニューゲッターマウス / S／ニューゲッターマウス／CG / エレコ / A PROJECT` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン` を組み替えて再探索したが直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 設定示唆要素は存在するが、通常の設定推測要素であり朝一の設定変更判別とは分離する。

### numericResetData

- 天井短縮値: NOT_APPLICABLE。
- 設定変更後専用モード振り分け: NOT_APPLICABLE / NONE_CONFIRMED。
- 朝一特定G以内当選率: NONE_CONFIRMED。
- 設定変更専用恩恵発生率: NONE_CONFIRMED。

### publicMorningNumbers

- 公開固定できる朝一専用数値: NONE_CONFIRMED_AFTER_RESEARCH。

## resetBehavior QAメモ

- 一撃の「天井/設定変更」ページは天井非搭載と明記するが、設定変更時の機種固有挙動は数値・契約を掲載していない。
- HAZUSE、P-WORLD、パチビー、必勝本、複数解析サイトを確認し、性能コアは高信頼で固定可能。
- resetBehaviorについてはノーマル機ゆえ天井/モード/有利区間系の多くが非該当。一方、成立済みボーナス状態・純電断・ガックン等は本機固有資料を確認できないため推測補完していない。

## conflicts

- REG最大獲得枚数:
  - 主要業界DB / P-WORLD / パチビー / 必勝本 / 複数資料: **最大77枚**
  - 一撃（2025-12-09更新）: **最大85枚**
  - canonical comparison value: **77枚**（同時期を含む複数系統一致を優先）。85枚は削除せずCONFLICT保持。
- generation表記は「6号機」とするDBと「6.2号機」とする資料がある。本DBではHAZUSE / パチビー等に基づき6.2号機をcanonicalとし、広義の6号機表記は包含関係として扱う。

## missingFields

- 設定変更時の成立済みボーナスフラグ / 告知待ち状態: UNVERIFIED_AFTER_RESEARCH
- 据え置き時の同状態: UNVERIFIED_AFTER_RESEARCH
- 純電源OFF→ON時の同状態: UNVERIFIED_AFTER_RESEARCH
- 本機固有ガックン / 初期出目等の変更判別: UNVERIFIED_AFTER_RESEARCH

## sources

取得日: 2026-09-13

1. P-WORLD 業界ニュース / 遊技日本 — ニューゲッターマウス基本スペック
   - https://news.p-world.co.jp/articles/20573/nippon
   - 型式 S/ニューゲッターマウス/CG、BB/RB/合算、出玉率、BB最大225枚、REG最大77枚
   - reliability: INDUSTRY
2. P-WORLD — ニューゲッターマウス機種DB
   - https://www.p-world.co.jp/machine/database/9636
   - ノーマルタイプ、設定構成、BB最大225枚、REG最大77枚
   - reliability: INDUSTRY_DB
3. HAZUSE — ニューゲッターマウス
   - https://hazuse.com/machine/pachislot/1S1664/
   - 型式 S／ニューゲッターマウス／CG、検定番号1S1664、2022-07-04、6.2号機ノーマル
   - reliability: ANALYSIS_HIGH / MODEL_DB
4. パチビー — ニューゲッターマウス
   - https://www.pachibee.jp/machines/index/222050003
   - 6.2号機、2022-07-04、設定別BB/RB/合算、一般/完全攻略機械割、BB225枚、REG77枚
   - reliability: INDUSTRY_DB
5. グリーンべると / P-WORLD業界ニュース — A PROJECT史上最高のボーナス合成確率
   - https://news.p-world.co.jp/articles/20477/greenbelt
   - 設定1約41G/50枚、1/2/5/6の4段階、基本スペック
   - reliability: INDUSTRY
6. 一撃 — ニューゲッターマウス解析
   - https://1geki.jp/slot/s_new_gettermouse/
   - 設定別BB/RB/合算、機械割
   - reliability: ANALYSIS_HIGH
7. 一撃 — 天井/設定変更
   - https://1geki.jp/slot/s_new_gettermouse/5/
   - 天井非搭載
   - reliability: ANALYSIS_HIGH
8. 一撃 — REG BONUS
   - https://1geki.jp/slot/s_new_gettermouse/62/
   - REG最大85枚（他資料とのCONFLICT）
   - reliability: ANALYSIS_HIGH / CONFLICT_SOURCE
9. パチ＆スロ必勝本 — 基本スペック
   - https://p.hisshobon.jp/machine/3905/1/89595
   - BIG最大225枚 / REG最大77枚
   - reliability: ANALYSIS_HIGH
10. スロパチクエスト — 設定差まとめ
   - https://www.slopachi-quest.com/article/newgettermouse-settei/
   - 約41G/50枚、設定別BB/RB/合算、一般/完全攻略機械割
   - reliability: ANALYSIS_SECONDARY
