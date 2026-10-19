# パチスロ サイボーグ009

machineName: パチスロ サイボーグ009
formalModelName: パチスロサイボーグ009KE
inspectionNumber: 4S0006
manufacturer: 三洋物産
releaseDate: 2014-07-07
releaseDatePrecision: exact_start
generation: 5号機
systemType: AT / 疑似ボーナス / CZ（加速ゾーン） / ゲーム数解除・ゲーム数スキップ / 天井
recordStatus: COMPLETE_CORE_WITH_PARTIAL_RESET_BEHAVIOR_V0_7

## identity

- P-WORLDでメーカー三洋物産、検定番号 **4S0006**、型式名 **パチスロサイボーグ009KE** を確認。
- グリーンべると2014-05-26業界記事では納品を2014-07-06より予定。パチ7は導入日 **2014-07-07** と掲載するため、本DBではホール導入開始日を2014-07-07とする。
- confidence: INDUSTRY / ANALYSIS_HIGH

## payoutRateBySetting

| 設定 | 機械割 |
|---:|---:|
| 1 | 97.00% |
| 2 | 98.60% |
| 3 | 100.05% |
| 4 | 105.00% |
| 5 | 107.63% |
| 6 | 112.49% |

- パチマガスロマガ旧攻略でメーカー発表値として確認。後年解析の97.0 / 98.6 / 100.1 / 105.0 / 107.6 / 112.5%は丸め差として整合。
- confidence: ANALYSIS_HIGH_MANUFACTURER_PUBLISHED / MULTI_SOURCE

## initialHitBySetting

### 疑似ボーナス初当たり

| 設定 | ボーナス初当たり |
|---:|---:|
| 1 | 1/220.9 |
| 2 | 1/215.3 |
| 3 | 1/211.2 |
| 4 | 1/193.1 |
| 5 | 1/188.6 |
| 6 | 1/176.5 |

### AT「サイボーグRUSH」初当たり

| 設定 | AT初当たり |
|---:|---:|
| 1 | 1/549.0 |
| 2 | 1/533.8 |
| 3 | 1/522.6 |
| 4 | 1/447.9 |
| 5 | 1/410.5 |
| 6 | 1/351.4 |

- パチマガスロマガ旧攻略のメーカー発表値。期待値見える化でも同系列を確認。
- 一部後年記事がボーナス初当たりを「AT初当たり」と誤ラベルしているため、列定義を混同しない。
- confidence: ANALYSIS_HIGH_MANUFACTURER_PUBLISHED / MULTI_SOURCE

## baseGamesPer50

- **約30G / 50枚（1000円）**。
- パチマガスロマガ旧攻略の「1000円あたりのゲーム数」で確認。
- confidence: ANALYSIS_HIGH_PERIOD_SOURCE

## netIncrease

- 疑似ボーナス / AT「サイボーグRUSH」: **約2.5枚/G**。
- P-WORLD、グリーンべると、パチマガスロマガ等で整合。
- confidence: INDUSTRY / ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- B（ボーナス）: ベルナビ10回、**約50枚**。
- BB（ビッグボーナス）: ベルナビ20回、**約100枚**。
- BBB（ビンゴバトルボーナス）: **20G、約50枚 + AT確定**。
- AT「サイボーグRUSH」: **初期50G+α、約2.5枚/G**。
- グリーンべると/P-WORLD/パチマガスロマガで主要値が整合。
- confidence: INDUSTRY / ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- 通常時は50G単位で、ゲーム数解除のチャンス区間とCZ「加速ゾーン」のチャンス区間が交互に切り替わるゾーンスイッチ型。
- 加速ゾーンは10G+α。加速フリーズ成功時はゲーム数をスキップし、初回50〜99G、その後は継続ごとにゲーム数到達を加速する。
- 通常A/Bの最大天井は **1009G**。1000G以降の疑似ボーナスはAT確定BBB。
- AT中専用の通常Cは最大 **800G**。AT終了後も通常C滞在を継続する解析があり、AT後は天井が800Gとなる。
- 天国モード天井は **50G**。
- 通常時の全ゲーム数振り分け、全モード移行率等は物差し用途を超えるため収集しない。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: PARTIAL
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- パチ7当時機種ページの朝イチ表で、設定変更時は **天井G数リセット / モードリセット / 状態リセット / 液晶は船内ステージ**。
- 設定変更後専用のモード振り分け数値、状態振り分け数値は十分な再探索後も安全に固定できず **UNVERIFIED_AFTER_RESEARCH**。
- confidence: ANALYSIS_HIGH_PERIOD_SOURCE

### carryOverBehavior

- 純据え置きだけを独立列で明記した高信頼表は今回固定できず **UNVERIFIED_AFTER_RESEARCH**。
- ただし設定変更なしの電源ON/OFFでは天井G数・モード・状態を引き継ぐ本機固有表が存在する。純据え置き契約へ自動転記はしない。

### powerCycleBehavior

- 設定変更なし電源OFF→ON: **天井G数引継ぎ / モード引継ぎ / 状態引継ぎ**。
- 液晶は船内ステージ。AT中の電源復帰はAT中のままとする当時解析表あり。
- confidence: ANALYSIS_HIGH_PERIOD_SOURCE

### gameCounterReset

- 設定変更: **RESET_CONFIRMED**。
- 電源OFF→ONのみ: **CARRYOVER_CONFIRMED**。
- 純据え置き: **UNVERIFIED_AFTER_RESEARCH**（電断表から推測転記しない）。

### ceilingAfterReset

- 設定変更時に天井ゲーム数がリセットされることはCONFIRMED。
- **設定変更専用の短縮天井はNONE_CONFIRMED_AFTER_RESEARCH**。
- 通常A/B最大1009G、AT由来通常C最大800G、天国50Gは通常モード側の仕様であり「リセット専用短縮天井」とは扱わない。

### modeAfterReset

- 設定変更: **RESET_CONFIRMED**。
- 電源OFF→ONのみ: **CARRYOVER_CONFIRMED**。
- 設定変更時モード振り分け数値: **UNVERIFIED_AFTER_RESEARCH**。

### stateAfterReset

- 設定変更: **RESET_CONFIRMED**。
- 電源OFF→ONのみ: **CARRYOVER_CONFIRMED**。
- 設定変更時具体状態振り分け: **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits

- 設定変更固有の天井短縮や高確率優遇など、比較可能な主要恩恵は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 通常の天国50GやAT後通常C 800Gは設定変更専用恩恵ではないため分離。

### resetPenalties

- 設定変更固有の主要不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection

- 本機固有のガックン・表示・特定ゲーム数挙動による、実用上高信頼な設定変更/据え置き判別契約は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 電源復帰時の船内ステージは設定変更時にも電源ON/OFF時にも現れ得るため、それ単独を変更判別には使わない。

### numericResetData

- 設定変更専用短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 設定変更時モード振り分け: **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更時状態振り分け: **UNVERIFIED_AFTER_RESEARCH**。

### publicMorningNumbers

- 設定変更専用の比較可能な公開朝一数値は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 通常A/B 1009G、通常C 800G、天国50Gは通常モード仕様として別管理。

## resetBehavior 再探索メモ

- `パチスロ サイボーグ009 / サイボーグ009SP / パチスロサイボーグ009KE / 4S0006 / 三洋物産` に `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 1009G / 800G / 50G / モード / 状態 / ガックン / 変更判別 / 50枚 / 1000円` を組み合わせて再探索。
- グリーンべると、P-WORLD、パチ7、パチマガスロマガ旧攻略、一撃、当時の天井・ゾーン解析を横断。
- 2004年アビリット4号機「サイボーグ009」、2010年アビリット5号機「サイボーグ009〜地上より永遠に〜」は別機種。両機のリセット情報を2014年三洋版へ流用していない。
- 純据え置きは電源ON/OFF表から推測せずUNVERIFIEDを維持。

## sources

取得日: **2026-09-07**

1. グリーンべると / P-WORLD業界ニュース — レバーONの連続で出玉が加速！『サイボーグ009』
   - https://news.p-world.co.jp/articles/6539/greenbelt
   - 三洋物産、AT50G+α、純増約2.5枚/G、B約50枚、BB約100枚、BBB約50枚+AT、納品7/6予定
   - reliability: INDUSTRY
2. P-WORLD — パチスロ サイボーグ009
   - https://www.p-world.co.jp/machine/database/7415
   - 型式名パチスロサイボーグ009KE、検定番号4S0006、AT50G+α、純増約2.5枚/G、疑似ボーナス仕様
   - reliability: INDUSTRY
3. パチマガスロマガ — ボーナス確率
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/21/h-1.php
   - メーカー発表のボーナス初当たり、AT初当たり、PAYOUT
   - reliability: ANALYSIS_HIGH / MANUFACTURER_PUBLISHED
4. パチマガスロマガ — 小役確率
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/21/c.php
   - 1000円あたり約30G
   - reliability: ANALYSIS_HIGH
5. パチマガスロマガ — ボーナス
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/21/bonus.php
   - B約50枚、BB約100枚、BBB20G約50枚+AT確定
   - reliability: ANALYSIS_HIGH
6. パチ7 — 天井
   - https://pachiseven.jp/machines/4156/cutout/78
   - 導入日2014-07-07、通常A/B 1009G、通常C 800G、1000G以降BBB
   - reliability: ANALYSIS_HIGH
7. パチ7 — 朝イチ
   - https://pachiseven.jp/machines/4156/cutout/80
   - 設定変更: 天井/モード/状態リセット。電源ON/OFF: 天井/モード/状態引継ぎ。液晶復帰状態
   - reliability: ANALYSIS_HIGH
8. 期待値見える化 — サイボーグ009 天井・ゾーン
   - https://slotjin.com/zone/cyborg009/
   - ボーナス/AT初当たり、機械割、通常A/B 1009G、通常C 800G、天国50G、純増2.5枚/Gの照合
   - reliability: ANALYSIS_SINGLE_PERIOD_SOURCE

## missingFields

- 純据え置き時を独立して明記した本機固有契約
- 設定変更時モード振り分けの公開数値
- 設定変更時状態振り分けの公開数値
- 本機固有の高信頼な設定変更判別（ガックン等）

## conflicts

- 後年の一部記事では 1/220.9〜1/176.5 の疑似ボーナス初当たり系列を「AT初当たり」と表記する例がある。メーカー発表系列ではAT初当たりは1/549.0〜1/351.4であり、同一指標として平均せず列定義差として分離。
- P-WORLDの導入開始表示は2014年06月の月粒度だが、業界記事の7/6納品予定とパチ7の7/7導入が具体日で一致方向。releaseDateは2014-07-07を採用し、月粒度表示をCONFLICT扱いにはしない。

coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL
