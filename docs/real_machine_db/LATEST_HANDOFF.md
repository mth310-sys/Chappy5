# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **830**
- latestRecordAdded: **パチスロ サイボーグ009**（三洋物産）— 2014-07-07
- latestRecord: `docs/real_machine_db/machines/2014-07-07_pachislot-cyborg009.md`
- chronologicalFrontier: **2014-07-07**
- frontierLatestMachine: **パチスロ サイボーグ009**
- schema: **resetBehavior v0.7**
- status: **2014-07-07_GROUP_OPEN**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、本handoff、829件目 `2014-07-07_tekken-3rd.md` を再読。
- INDEXは19件表記の旧集約状態のため、README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時の正本は **829件 / 2014-07-07 / 07-07_GROUP_OPEN**。指定どおり次の未処理「パチスロ サイボーグ009」から継続。

## 今回追加 — パチスロ サイボーグ009

### identity / 性能コア

- manufacturer: **三洋物産**。
- hall start: **2014-07-07**。業界記事は7/6納品予定、パチ7は7/7導入。
- formalModelName: **パチスロサイボーグ009KE**。
- inspectionNumber: **4S0006**。
- generation/system: **5号機 / AT / 疑似ボーナス / CZ（加速ゾーン） / ゲーム数解除・スキップ / 天井**。
- payoutRate: **97.00 / 98.60 / 100.05 / 105.00 / 107.63 / 112.49%**（メーカー発表系列）。
- 疑似ボーナス初当たり: **1/220.9 → 1/176.5**。
- AT初当たり: **1/549.0 → 1/351.4**。
- baseGamesPer50: **約30G**。
- 純増: **約2.5枚/G**。
- B約50枚、BB約100枚、BBB 20G約50枚+AT確定、AT「サイボーグRUSH」初期50G+α。
- 通常A/B最大天井 **1009G**、AT由来通常C **800G**、天国 **50G**。
- coreStatus: **COMPLETE_CORE**。

## パチスロ サイボーグ009 — resetBehavior v0.7

- settingChangeBehavior: パチ7当時朝イチ表で **天井G数RESET / モードRESET / 状態RESET / 液晶は船内ステージ**。
- powerCycleBehavior: 設定変更なし電源OFF→ONは **天井G数CARRYOVER / モードCARRYOVER / 状態CARRYOVER**。液晶は船内ステージ、AT中ならAT中復帰。
- carryOverBehavior: 純据え置きを独立明記した本機固有高信頼資料は **UNVERIFIED_AFTER_RESEARCH**。電断表から自動転記しない。
- gameCounterReset: 設定変更 **RESET_CONFIRMED** / 電断のみ **CARRYOVER_CONFIRMED** / 純据え置き **UNVERIFIED_AFTER_RESEARCH**。
- ceilingAfterReset: 設定変更専用短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。1009/800/50Gは通常モード仕様として分離。
- modeAfterReset: 設定変更 **RESET_CONFIRMED** / 電断のみ **CARRYOVER_CONFIRMED**。設定変更時モード振り分け数値はUNVERIFIED。
- stateAfterReset: 設定変更 **RESET_CONFIRMED** / 電断のみ **CARRYOVER_CONFIRMED**。具体状態振り分けはUNVERIFIED。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- resetBenefits / resetPenalties: 設定変更固有の比較可能な主要恩恵・不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetDetection: 船内ステージは変更・電断双方で出るため単独判別不可。ガックン等の本機固有高信頼契約は **NONE_CONFIRMED_AFTER_RESEARCH**。
- publicMorningNumbers: 設定変更専用の比較可能な公開朝一数値は **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetBehaviorQA: **PARTIAL**。

## safeguard / 再探索

- `パチスロ サイボーグ009 / サイボーグ009SP / パチスロサイボーグ009KE / 4S0006 / 三洋物産` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 1009G / 800G / 50G / モード / 状態 / ガックン / 50枚` を組み合わせて再探索。
- グリーンべると、P-WORLD、パチ7、パチマガスロマガ旧攻略、一撃、当時天井・ゾーン解析を横断。
- 2004年アビリット4号機、2010年アビリット5号機「地上より永遠に」は別機種。リセット情報を流用していない。
- 一部後年記事は1/220.9〜1/176.5を「AT初当たり」と誤ラベルするため、メーカー発表の疑似ボーナス初当たりとAT初当たり1/549.0〜1/351.4を分離保持。

## 遡及 resetBehavior QA

- `docs/real_machine_db/machines/2007-02-18_kagaku-ninjatai-gatchaman.md` をv0.7再QA。
- `schemaVersion: v0.7`、`resetQaLastUpdated: 2026-09-07`、`publicMorningNumbers`を明示。
- 1300G救済G-ZONEと通常GT/G-ZONE仕様は再確認したが、設定変更/据え置き/単純電断時の1300Gカウンタ・GT/G-ZONE内部状態処理は資料系統を変えても直接契約を固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 既存 `coreStatus: COMPLETE_CORE` は維持し、reset QAのみ **PARTIAL**。
- Git履歴上、ガッチャマン追加直後の次の新規実機レコードは `docs/real_machine_db/machines/2007-02-12_tim-to-iu-na-no-pachislotki.md`。次QAカーソルは同機とする。

## 2014-07-07群 / 次候補

- 07-07群は **まじかる☆タルるートくん / 鉄拳3rd / パチスロ サイボーグ009 / 娘娘娘** の4機。
- No.828 まじかる☆タルるートくん、No.829 鉄拳3rd、No.830 パチスロ サイボーグ009まで処理済み。
- 07-07群はまだ **OPEN**。
- 次の明確な未処理は岡崎産業 **「娘娘娘」**。これを処理後、他メーカー/資料系統で07-07群漏れ監査を行いCLOSED判定する。

## 次回再開地点

1. **recordCount 830 / chronologicalFrontier 2014-07-07 / 07-07_GROUP_OPEN** から開始。
2. 最新mainで README / mission / INDEX / LATEST_HANDOFF / 830件目を再確認。
3. 最初の未処理は **娘娘娘（岡崎産業）**。
4. 07-07群CLOSED後、07-08〜07-21境界監査を行い、漏れがなければK-Navi上の次の全国一斉導入アンカー **2014-07-22**へ進む。
5. 遡及QAは `docs/real_machine_db/machines/2007-02-12_tim-to-iu-na-no-pachislotki.md` から再開。
6. 2015-06-08到達時の **吉宗～極～（ヨシムネH2A4 / 3S1093）** 正式量産版処理注意は維持。

## 主要出典 — 取得日 2026-09-07

### パチスロ サイボーグ009
- グリーンべると / P-WORLD業界ニュース: `https://news.p-world.co.jp/articles/6539/greenbelt`
- P-WORLD: `https://www.p-world.co.jp/machine/database/7415`
- パチマガスロマガ ボーナス確率/PAYOUT: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/21/h-1.php`
- パチマガスロマガ 1000円ゲーム数: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/21/c.php`
- パチマガスロマガ ボーナス: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/21/bonus.php`
- パチ7 天井: `https://pachiseven.jp/machines/4156/cutout/78`
- パチ7 朝イチ: `https://pachiseven.jp/machines/4156/cutout/80`
- 期待値見える化: `https://slotjin.com/zone/cyborg009/`

### 科学忍者隊ガッチャマン QA
- パチマガスロマガ G-ZONE: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/54/k.php`
- K-Navi: `https://p-kn.com/slot/675/`
- 既存レコード記載の業界/解析各資料も再確認。
