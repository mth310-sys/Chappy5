# 娘娘娘

machineName: 娘娘娘
reading: にゃんにゃんむすめ
formalModelName: ニャンニャンムスメN1
inspectionNumber: 4S0172
manufacturer: 岡崎産業
releaseDate: 2014-07-07
releaseDatePrecision: exact_start
generation: 5号機
systemType: AT / 疑似ボーナス / CZ / ゲーム数解除 / 天井
recordStatus: COMPLETE_CORE_WITH_PARTIAL_RESET_BEHAVIOR_V0_7

## identity

- 岡崎産業のオリジナルAT機。D-Oは企画・設計等を担当し、発売元を岡崎産業と記載。
- グリーンべると2014-06-17記事は納品開始予定を2014-07-06、当時攻略記事は導入日2014-07-07と記載するため、本DBではホール導入開始を2014-07-07とする。
- P-WORLDで型式名 **ニャンニャンムスメN1**、検定番号 **4S0172** を確認。
- confidence: INDUSTRY / ANALYSIS_HIGH

## payoutRateBySetting

| 設定 | 機械割 |
|---:|---:|
| 1 | 96.87% |
| 2 | 98.35% |
| 3 | 100.57% |
| 4 | 103.10% |
| 5 | 105.60% |
| 6 | 110.03% |

- パチマガスロマガ旧攻略のメーカー発表値。グリーンべるとは設定1 96.87%〜設定6 110.03%、P-WORLDは丸め値96.9〜110.0%で整合。
- confidence: ANALYSIS_HIGH_MANUFACTURER_PUBLISHED / INDUSTRY_MULTI_SOURCE

## initialHitBySetting

### 疑似ボーナス合成

| 設定 | ボーナス合成 |
|---:|---:|
| 1 | 1/108.5 |
| 2 | 1/103.7 |
| 3 | 1/96.5 |
| 4 | 1/89.3 |
| 5 | 1/82.7 |
| 6 | 1/72.3 |

- パチマガスロマガ旧攻略のメーカー発表値。グリーンべるとの設定1〜6レンジ、当時攻略記事と一致。
- 注意: これは疑似ボーナスの**合成確率**であり、ゲーム数解除/CZ等を分離した「初当たり確率」と同一視しない。
- confidence: ANALYSIS_HIGH_MANUFACTURER_PUBLISHED / INDUSTRY_MULTI_SOURCE

## baseGamesPer50

- **30.64G / 50枚（1000円）**。
- パチマガスロマガ旧攻略の「1000円あたりのゲーム数」で確認。
- confidence: ANALYSIS_HIGH_PERIOD_SOURCE

## netIncrease

- 疑似ボーナスAT: **約2.8枚/G**。
- グリーンべると、P-WORLD、パチマガスロマガで整合。
- confidence: INDUSTRY / ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- 桃花ボーナス: ベルナビ20回、**約100枚**。
- 桜花ボーナス: ベルナビ40回、**約200枚**。
- 娘娘ボーナス: ベルナビ60〜222回、**約300〜1110枚**。
- ボーナス終了後はCZ「娘娘時間」へ。通常版は5G・期待度約30%、超娘娘時間は10G・期待度約51%。
- confidence: INDUSTRY / ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- 通常時はゲーム数解除（6〜999G）とCZで疑似ボーナスを目指す。
- 最大天井は **999G**。天井到達時は128G以内のボーナス当選が3回または5回連続する恩恵が解析されている。
- モードB/Cは641〜768G帯が最深、モードD（超娘娘/天国）は128G以内、モードEは1G連専用。
- 通常時の全規定ゲーム数振り分け・全モード移行表は物差し用途を超えるため収集しない。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: PARTIAL
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- 当時攻略資料で設定変更（リセット）後に専用のモード振り分けが存在し、**モードC 28.13% / モードD 28.13%**が明示されている。
- 設定変更後は**約35%で128G以内にゲーム数解除**するとされる。
- 設定変更でゲーム数カウンタ・天井が0起点へ戻ることを独立表で直接明示した高信頼資料は今回固定できず、天井リセット契約そのものは **UNVERIFIED_AFTER_RESEARCH** とする。リセット後専用モード抽選の存在から推測転記しない。
- confidence: ANALYSIS_SINGLE_PERIOD_SOURCE

### carryOverBehavior

- 純据え置き時にゲーム数、モード、CZ関連状態をどう保持するかを本機固有で直接示した高信頼資料は、表記揺れ・型式名を含めた再探索後も固定できず **UNVERIFIED_AFTER_RESEARCH**。

### powerCycleBehavior

- 設定変更なしの単純電源OFF→ONについて、ゲーム数・モード・状態の処理を本機固有で明示した直接資料は **UNVERIFIED_AFTER_RESEARCH**。
- 一般的な5号機仕様や他の岡崎産業機からは転記しない。

### gameCounterReset

- 設定変更: **UNVERIFIED_AFTER_RESEARCH**（専用リセットモード振り分けは確認済みだが、前日内部G数/天井G数の明示的RESET表は未固定）。
- 据え置き: **UNVERIFIED_AFTER_RESEARCH**。
- 電源OFF→ONのみ: **UNVERIFIED_AFTER_RESEARCH**。

### ceilingAfterReset

- 通常最大天井999GはCONFIRMED。
- 設定変更専用の固定短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。
- リセット後約35%で128G以内解除という公開値は、固定天井短縮ではなく専用モード配分による朝一優遇として分離する。

### modeAfterReset

- 設定変更後に専用の再振り分けが行われることをCONFIRMED。
- 公開確認値: **モードC 28.13% / モードD 28.13%**。
- 残る43.74%のA/B内訳は今回の安全な直接資料では固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 据え置き/電断のみのモード引継ぎ契約はUNVERIFIED。

### stateAfterReset

- モード以外のCZ高確等「内部状態」を設定変更時にどう処理するかは **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits

- 設定変更後は**約35%で128G以内のゲーム数解除**。
- リセット後モードC 28.13%、モードD 28.13%。モードDは128G以内解除が確定する天国系モード。
- 128G以内のゲーム数解除後は次回も128G以内ループに期待できるため、朝一狙いに実用的な恩恵がある。

### resetPenalties

- 設定変更固有の主要不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection

- ガックン、初期7セグ、特定表示などによる本機固有の高信頼な設定変更判別契約は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 128G以内の早いゲーム数解除は変更後優遇と整合するが、通常運用でも128G以内当選は存在するため単独で変更確定とは扱わない。

### numericResetData

- 設定変更後128G以内ゲーム数解除: **約35%**。
- 設定変更後モードC: **28.13%**。
- 設定変更後モードD: **28.13%**。
- 設定変更専用固定短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。

### publicMorningNumbers

- **約35%で128G以内解除**。
- リセット後モードC **28.13%** / モードD **28.13%**。
- これらは当時攻略資料の解析値として保存し、メーカー発表値とは扱わない。

## resetBehavior 再探索メモ

- `娘娘娘 / にゃんにゃんむすめ / ニャンニャンムスメN1 / 4S0172 / 岡崎産業` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 999G / 128G / モード / モードC / モードD / ガックン / 変更判別 / 50枚 / 1000円` を組み合わせて再探索。
- 岡崎産業関連開発資料、グリーンべると、P-WORLD、パチマガスロマガ旧攻略、当時天井解析、旧実機DBを横断。
- 「娘娘」「にゃんにゃん」の飲食店等の同名ノイズ、および後年の岡崎産業機は排除。
- 設定変更後の朝一優遇値は取得できたが、純据え置き・単純電断・前日内部G数の直接契約は推測で埋めていない。

## sources

取得日: **2026-09-07**

1. グリーンべると — 岡崎産業が新感覚の萌え系パチスロ『娘娘娘』発表
   - https://web-greenbelt.jp/00006990/
   - AT純増2.8枚/G、3種疑似ボーナス、CZ期待度、合算1/108.5〜1/72.3、出玉率96.87〜110.03%、7/6納品開始予定
   - reliability: INDUSTRY
2. P-WORLD — 娘娘娘
   - https://www.p-world.co.jp/machine/database/7437
   - 岡崎産業、AT/CZ/天井、型式ニャンニャンムスメN1、検定4S0172、純増2.8枚/G、999G天井、各疑似ボーナス性能
   - reliability: INDUSTRY
3. パチマガスロマガ — 娘娘娘 ボーナス確率
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/okazaki_slot/72/h.php
   - メーカー発表の疑似ボーナス合成・PAYOUT
   - reliability: ANALYSIS_HIGH / MANUFACTURER_PUBLISHED
4. パチマガスロマガ — 娘娘娘 小役確率
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/okazaki_slot/72/c.php
   - 1000円あたり30.64G
   - reliability: ANALYSIS_HIGH
5. パチマガスロマガ — 娘娘娘 機種トップ
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/okazaki_slot/72/okazaki_slot_72.php
   - AT/CZ/モード/朝イチ解析カテゴリの存在確認
   - reliability: ANALYSIS_HIGH
6. すろぱちくえすと — 娘娘娘 天井恩恵・設定変更恩恵解析
   - https://www.slopachi-quest.com/article/nyannyanmusume/
   - 導入日2014-07-07、999G天井、設定変更後約35%で128G以内解除、リセット後モードC/D各28.13%、モード別天井
   - reliability: ANALYSIS_SINGLE_PERIOD_SOURCE
7. 娯楽産業 — 岡崎産業 新機種「娘娘娘」発表
   - https://www.goraku-sangyo.com/%E5%B2%A1%E5%B4%8E%E7%94%A3%E6%A5%AD%E3%80%80%E6%96%B0%E6%A9%9F%E7%A8%AE%E3%80%8C%E5%A8%98%E5%A8%98%E5%A8%98%E3%83%8B%E3%83%A3%E3%83%B3%E3%83%8B%E3%83%A3%E3%83%B3%E3%83%A0%E3%82%B9%E3%83%A1%E3%80%8D/
   - 岡崎産業発表会、3種ボーナス獲得性能、引き戻しゾーン
   - reliability: INDUSTRY
8. D-O — パチスロ娘娘娘
   - https://www.d-o-inc.co.jp/2014/07/nyannyan_slot.html
   - 岡崎産業発売、D-Oが企画・設計等を担当
   - reliability: INDUSTRY_DEVELOPER

## missingFields

- 純据え置き時の内部ゲーム数/モード/状態の直接契約: UNVERIFIED_AFTER_RESEARCH
- 設定変更なし電源OFF→ON時の内部ゲーム数/モード/状態の直接契約: UNVERIFIED_AFTER_RESEARCH
- 設定変更時に前日内部ゲーム数/天井Gがリセットされることを独立明記した直接表: UNVERIFIED_AFTER_RESEARCH
- 設定変更後モードA/Bの個別振り分け: UNVERIFIED_AFTER_RESEARCH
- ガックン等の変更判別契約: NONE_CONFIRMED_AFTER_RESEARCH

## conflicts

- NONE_CONFIRMED。P-WORLDの機械割96.9〜110.0%はメーカー発表96.87〜110.03%の丸めとして扱う。

## status

- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **PARTIAL**
