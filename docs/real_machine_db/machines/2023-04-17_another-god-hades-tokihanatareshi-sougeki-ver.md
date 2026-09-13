# アナザーゴッドハーデス-解き放たれし槍撃ver.-

recordNo: 1558
machineName: アナザーゴッドハーデス-解き放たれし槍撃ver.-
manufacturer: ミズホ / ユニバーサルエンターテインメント
formalModel: S／アナザーゴッドハーデス／SL
inspectionCode: 2S0344（資料表示 `230344` あり）
releaseDate: 2023-04-17
generation: 6.5号機 / メダル機
systemType: AT / GOD GAME + JUDGEMENT
settings: 1 / 2 / 3 / 4 / 5 / 6

## payoutRateBySetting
- 設定1: 97.6%
- 設定2: 98.9%
- 設定3: 102.0%
- 設定4: 106.0%
- 設定5: 109.4%
- 設定6: 112.1%

信頼度: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## initialHitBySetting
### GG初当たり
- 設定1: 1/510.9
- 設定2: 1/418.4
- 設定3: 1/338.6
- 設定4: 1/275.8
- 設定5: 1/244.7
- 設定6: 1/224.2

- GOD揃い: 1/8192
- 冥王揃い: 1/16384
- 紫7揃い: 1/16384

信頼度: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## baseGamesPer50
- 約33G/50枚。

信頼度: INDUSTRY / MULTI_SOURCE_MATCH

## netIncrease
- AT「GOD GAME」: 約2.9枚/G。

信頼度: OFFICIAL + INDUSTRY

## basicPayout
- AT「GOD GAME」はJUDGEMENTで初期ゲーム数を決定して消化するゲーム数上乗せ型AT。
- 天井1400G到達時は全回転フリーズが発生し、紫7 / 冥王 / GODが1:1:1で出現。
- 通常時200G・400Gはヘルゾーン高確ポイント、666G消化でヘルゾーン以上へ突入。

## modeSpecificMinimumData
- 通常時ゲーム数天井: 1400G（全回転フリーズ）。
- CZ系ゲーム数ポイント: 200G / 400Gはヘルゾーン高確、666Gでヘルゾーン以上。
- AT終了後は引き戻しゾーン「ヘルグレイヴ」へ移行。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESET_CORE_WITH_LIMITED_PUBLIC_MORNING_NUMBERS
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更時は有利区間RESET。
- 天井ゲーム数RESET。
- 内部モード / ヘルゾーン抽選状態はRESET扱い。
- 設定変更後は新たな有利区間として開始する。

### carryOverBehavior
- 据え置き時は有利区間CARRY_OVER。
- 天井ゲーム数CARRY_OVER。
- 内部モード / ヘルゾーン抽選状態CARRY_OVER。

### powerCycleBehavior
- 純電源OFF→ONで設定変更を伴わない場合、天井ゲーム数・内部モード・ヘルゾーン抽選状態を引き継ぐとする複数解析を採用。
- 有利区間もCARRY_OVER扱い。

### gameCounterReset
- 設定変更: RESET。1400G天井を0から再計算。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- 666GのCZ系ポイントも内部ゲーム数引継ぎの影響を受けるため、前日ゲーム数との合算挙動が据え置き推測材料になる。

### ceilingAfterReset
- 通常時天井: 1400G。
- 設定変更専用のゲーム数天井短縮は、公式・主要解析・当時/後年資料を再探索したが確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
- 666Gのヘルゾーン以上確定ポイントは通常仕様であり、設定変更専用短縮天井ではない。

### modeAfterReset
- 設定変更: RESET・再抽選扱い。
- 据え置き/純電源OFF→ON: CARRY_OVER。
- 設定変更専用の通常モード振り分け数値は十分な再探索後も固定できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### stateAfterReset
- 設定変更: ヘルゾーン抽選状態等をRESET扱い。
- 据え置き/純電源OFF→ON: CARRY_OVER。
- 一部後年解析に「朝一は内部的にヘルグレイヴ相当で序盤の初当たりが優遇される可能性」とする記述があるが、公式・高信頼複数解析で固定数値を照合できないため canonical な確定恩恵には採用しない。

### advantageousSectionReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- 有利区間ランプによる変更/据え置き判別は不可。

### resetBenefits
- 有利区間開始ゲームでレア小役が成立した場合、JUDGEMENT抽選が行われる公開解析あり。
- 設定変更専用の固定天井短縮は確認なし。
- 朝一序盤の初当たり優遇を示す実戦/後年資料はあるが、固定仕様・数値としては `UNVERIFIED_AFTER_RESEARCH`。

### resetPenalties
- 設定変更により前日の天井ゲーム数・モード・ヘルゾーン抽選状態を失う。
- 設定変更専用の追加不利抽選は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 有利区間ランプでは判別不可。
- 前日の内部ゲーム数を把握できる場合、前日+当日で666G付近にヘルゾーン以上へ入る挙動は据え置き推測材料。逆に当日基準666Gでの挙動は変更推測材料になり得るが単独確定にはしない。
- 本機固有のリールガックン発生条件/発生率は、機種名・型式・メーカー・ガックン/設定変更語を変えて再探索しても固定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- 通常天井: 1400G。
- ヘルゾーン高確ポイント: 200G / 400G。
- 666G: ヘルゾーン以上へ突入。
- 有利区間開始ゲームのレア小役成立時JUDGEMENT当選率（なな徹）:
  - 中段リプレイ: 10.2%
  - チャンス目: 12.5%
  - フェイクリプレイ: 12.5%
  - 右上がり黄7: 39.8%
  - 中段黄7: 75.0%
  ※設定変更時に限らず有利区間開始時共通の公開値として保持。

### publicMorningNumbers
- 設定変更専用のモード振り分け: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 設定変更専用の短縮天井: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 朝一序盤の固定初当たり率/期待度: `UNVERIFIED_AFTER_RESEARCH`（実戦ベースの優遇示唆はあるが正式数値未固定）。

### resetBehavior 再探索メモ
- 取得/再探索日: 2026-09-13。
- `アナザーゴッドハーデス-解き放たれし槍撃ver.- / S／アナザーゴッドハーデス／SL / ミズホ / 2S0344 / 230344` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 1400G / 666G / ヘルゾーン / ヘルグレイヴ / モード / ガックン / 有利区間 / 判別` を組み替えて検索。
- ユニバーサル公式、グリーンべると/P-WORLD、遊技日本、なな徹、パチマガスロマガ、すろぱちくえすと、ハズセ、後年解析を横断。

## conflicts
- 検定番号表記は資料に `230344` と表示される系統と、型式DB/URL等で `2S0344` と扱われる系統がある。コード体系上の表記差として双方を保持し、機種同一性は型式 `S／アナザーゴッドハーデス／SL` で照合。
- 朝一序盤について「ヘルグレイヴ相当/初当たり優遇」を示す後年解析がある一方、主要高信頼解析は固定恩恵として数値化していない。`UNVERIFIED_AFTER_RESEARCH` として分離。

## sources
取得日: 2026-09-13

- ユニバーサルエンターテインメント公式: https://www.universal-777.com/product/slot/hades_sougeki/
  - 6.5号機、AT、2023年4月発売、1400G全回転フリーズ、メーカー。
- 遊技日本 新機種記事: https://yugi-nippon.com/pachinko-new-machine/post-56530/
  - 型式 `S/アナザーゴッドハーデス/SL`、6.5号機、設定別GG初当り/出玉率。
- グリーンべると/P-WORLD 4/17新台記事: https://news.p-world.co.jp/articles/23797/greenbelt
  - 2023-04-17導入、純増2.9枚/G、33G/50枚、1400G、200/400/666G、設定別性能。
- なな徹 朝一・設定変更: https://nana-press.com/kaiseki/machine/530/13786/
  - 設定変更/据え置きの有利区間・天井、開始時レア小役JUDGEMENT抽選、有利区間ランプ判別不可。
- パチマガスロマガ 全回転フリーズ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/mizuho_slot/48/tj07-2.php
  - 1400G全回転、紫7/冥王/GOD 1:1:1。
- ハズセ機種DB: https://hazuse.com/machine/pachislot/2S0344/
  - 導入日、型式、検定番号表示、純増。
- すろぱちくえすと: https://www.slopachi-quest.com/article/anothergodhades-6-5-tenjou/
  - 設定変更/電源OFF→ONの有利区間・天井・内部モード比較、666Gを使った据え置き推測、朝一実戦優遇示唆。

missingFields:
- 設定変更専用モード振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 設定変更専用短縮天井: NONE_CONFIRMED_AFTER_RESEARCH
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH
- 朝一序盤の公式/解析固定当選率: UNVERIFIED_AFTER_RESEARCH

coreStatus: COMPLETE_CORE
resetBehaviorStatus: COMPLETE_RESET_CORE_WITH_LIMITED_PUBLIC_MORNING_NUMBERS
