# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **812**
- latestRecordAdded: **マジックモンスター3 ぶっちぎり!魔界グランプリ**（オリンピア）— 2014-04-21
- latestRecord: `docs/real_machine_db/machines/2014-04-21_magic-monster3-bucchigiri-makai-grand-prix.md`
- chronologicalFrontier: **2014-04-21**
- frontierLatestMachine: **マジックモンスター3 ぶっちぎり!魔界グランプリ**
- schema: **resetBehavior v0.7**
- status: **2014-04-21_GROUP_OPEN / MAGIC_MONSTER3_ADDED**

## 今回の同期 / 重要事項

- 最新mainの `README.md`、ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前実レコード `2014-04-21_kenka-matsuri.md` を再読して正本化。
- 作業開始時の正本は **811件 / 2014-04-21 喧嘩祭 / 04-21_GROUP_OPEN**。
- K-Navi 2014年4月全国一斉導入カレンダーで04/21群は **喧嘩祭 / マジックモンスター3 ぶっちぎり!魔界グランプリ / 緑ドンVIVA2 / ニューペガサス** の4機。
- 2機目の **マジックモンスター3 ぶっちぎり!魔界グランプリ** を812件目として追加。同日群は引き続きOPEN。

## 今回追加 — マジックモンスター3 ぶっちぎり!魔界グランプリ

### identity / 性能コア

- manufacturer: **オリンピア**。
- hall start: **2014-04-21**（K-Navi全国一斉導入開始日）。グリーンべると当時記事は4/20納品開始予定。
- formalModelName: **マジックモンスター3J2**。
- generation/system: **5号機 / AT / CZ / セットストック+継続率**。
- payout: **96.6 / 97.9 / 100.3 / 104.2 / 108.5 / 113.4%**。
- AT「GP RUSH」初当たり: **1/128.9 / 123.4 / 117.1 / 108.5 / 101.2 / 93.1**。
- baseGamesPer50: **UNVERIFIED_AFTER_RESEARCH**。表記揺れ・型式・50枚/1000円/ベース/コイン持ち/千円Gを変えて複数系統再探索済み。
- netIncrease: **約2.6枚/G**。
- GP RUSH: **1セット28G（20G+継続レース8G）**、セットストック+継続率、ループ率25〜95%。
- 通常時は公開解析上 **状態の高低なし / 天井以外ゲーム数解除なし**。
- AT間天井: **666G** → 「禁断の! AREA666」、75%以上AT継続率。
- 別救済: **AT単発7回連続後、次回AT75%以上**。
- coreStatus: **PARTIAL**（50枚ベース未確定）。

### resetBehavior v0.7

- settingChangeBehavior: **AT間666G天井カウンタ RESET_CONFIRMED**。朝一ステージはランダム選択。
- carryOverBehavior: 据え置き専用の直接文言は未取得。AT間666Gは電源ON/OFFのみで保持する直接契約があるため保持が自然だが、DBでは **KEEP_INFERRED_FROM_DIRECT_POWER_CYCLE_CONTRACT_BUT_NO_SEPARATE_STAY_TEXT** と留保。
- powerCycleBehavior: **電源OFF→ONのみならAT間666G天井 KEEP_CONFIRMED**。朝一ステージはランダム選択。
- gameCounterReset: 設定変更 **RESET_CONFIRMED** / 電源OFF→ONのみ **KEEP_CONFIRMED**（AT間666G）。単発連続回数カウンタは **UNVERIFIED_AFTER_RESEARCH**。
- ceilingAfterReset: 設定変更専用短縮天井 **NONE_CONFIRMED_AFTER_RESEARCH**。通常666Gをリセット専用値とは扱わない。
- modeAfterReset: 通常A/B等のゲーム数モードは確認されず、天井除きゲーム数解除なし。朝一専用モード **NONE_CONFIRMED_AFTER_RESEARCH**。
- stateAfterReset: 公開通常時モデルでは高低状態 **NOT_APPLICABLE_TO_PUBLISHED_NORMAL_STATE_MODEL**。特殊内部状態は未確認。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- resetBenefits/resetPenalties: 本機固有の主要設定変更専用恩恵/不利 **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetDetection: 設定変更時も電源ON/OFFのみでも朝一ステージはランダムのため **ステージ単独判別不可**。ガックン等は **UNVERIFIED_AFTER_RESEARCH**。
- publicMorningNumbers: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetBehaviorQA: **PARTIAL**。

## safeguards / definitions

- AT間666G天井とAT単発連続回数救済天井は別カウンタとして保持。
- 666Gは通常仕様天井であり、設定変更専用短縮天井ではない。
- 「状態の高低なし」は公開通常時モデルについての記述で、未公開内部フラグまで不存在と拡張しない。
- 後継/別シリーズのリセット情報を混入しない。

## 2014-04-21群

- 処理済み: **喧嘩祭 / マジックモンスター3 ぶっちぎり!魔界グランプリ**。
- 未処理: **緑ドンVIVA2 / ニューペガサス**。
- status: **GROUP_OPEN**。

## 遡及 resetBehavior QA

- 直前リレーで **`docs/real_machine_db/machines/2007-02_skylove.md`** を再QA済み。
- 次のQAカーソルは **`docs/real_machine_db/machines/2007-02_ps-adlib-ouji.md`**。
- 今回は新規収集キューの継続を優先し、QAカーソルは変更なし。

## 次回再開地点

1. **recordCount 812 / chronologicalFrontier 2014-04-21 / 04-21_GROUP_OPEN** から開始。
2. 次の未処理機種は **緑ドンVIVA2（エレコ）— 2014-04-21**。
3. その後 **ニューペガサス（エマ）**。
4. 4機完了後に04/21群をメーカー横断再監査し、漏れがなければGROUP_CLOSED。
5. 遡及resetBehavior QAは **`docs/real_machine_db/machines/2007-02_ps-adlib-ouji.md`** から継続。
6. 2015-06-08到達時の **吉宗～極～（ヨシムネH2A4 / 3S1093）** の正式量産版処理注意は維持。

## 主要出典 — 取得日 2026-09-06

### マジックモンスター3
- K-Navi 2014年4月新台導入カレンダー: `https://p-kn.com/calendar/201404/`
- グリーンべると 当時記事: `https://web-greenbelt.jp/00000150/`
- パチマガスロマガ 機種概要: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/114/a.php`
- パチマガスロマガ AT突入フロー: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/114/l.php`
- P-WORLD: `https://www.p-world.co.jp/machine/database/7337`
- すろぱちくえすと 天井/設定変更: `https://www.slopachi-quest.com/article/magic-monster-tenzyou/`
- すろぱちくえすと 単発救済: `https://www.slopachi-quest.com/article/magimon3-kyuusai/`
- パチマ 型式資料: `https://www.pachima.com/c/slot/s_22olympiak/S00256`

### 04-21群
- K-Navi 2014年4月新台導入カレンダー: `https://p-kn.com/calendar/201404/`
