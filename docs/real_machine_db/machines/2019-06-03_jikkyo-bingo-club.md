# 実況BINGO倶楽部

recordNo: 1287
machineName: 実況BINGO倶楽部
manufacturer: コナミアミューズメント
formalModel: S実況BINGO倶楽部KU
certificationNumber: 8S0682
releaseDate: 2019-06-03
generation: 6号機
systemType: AT / CZ経由疑似ボーナスAT

## payoutRateBySetting

| 設定 | 機械割 / 出玉率 |
|---|---:|
| 1 | 97.5% |
| 2 | 98.9% |
| 3 | 100.5% |
| 4 | 102.1% |
| 5 | 104.6% |
| 6 | 108.2% |

K-Navi、ぱちんこキュレーション、当時解析資料で一致。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

| 設定 | CZ「ビンゴゲーム」 | ボーナス合算 |
|---|---:|---:|
| 1 | 1/82.5 | 1/313.5 |
| 2 | 1/83.1 | 1/304.3 |
| 3 | 1/83.4 | 1/291.0 |
| 4 | 1/83.9 | 1/280.1 |
| 5 | 1/84.1 | 1/261.5 |
| 6 | 1/84.5 | 1/259.5 |

K-Navi、ぱちんこキュレーション、当時攻略資料で照合。HAZUSEのみ設定5 CZを1/94.1と記載しているため、他の複数資料で一致する1/84.1をcanonicalとしCONFLICTを保持。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE_WITH_CONFLICT

## baseGamesPer50

- 約50G/50枚

複数解析資料で一致。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease

- AT純増: 約3.0枚/G

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- BINGO BONUS: BINGOライン数に応じて基本ゲーム数が変動。1セットは概ね `BINGOライン数×10G + 30G` の構造。
- BINGO BONUSの獲得目安: 約120〜750枚とする二次整理資料あり。
- プチボーナス: 20G、純増約3.0枚/Gのため基本性能は約60枚。

物差し用途ではライン別の全振り分けは収集しない。

信頼度: ANALYSIS_MULTI_SOURCE_STRUCTURE / ANALYSIS_SINGLE_PAYOUT_RANGE

## modeSpecificMinimumData

- CZ「ビンゴゲーム」は基本20〜30G+α。
- CZ間天井: 224G+αでCZ突入。
- ボーナス間天井: 573G+αでプチボーナス当選。
- ボーナス後は25GのCZへ移行する解析あり。
- 6号機AT。CZとボーナスの2種類のゲーム数管理があるため、物差し上は天井を混同せず別項目として保持する。

## resetBehavior

resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_CORE_RESET_RESEARCHED_WITH_CONFLICT

- settingChangeBehavior: 設定変更時はCZ/ボーナス天井ゲーム数をRESET、内部状態・モードをRESET。6号機の有利区間は非有利区間へ移行する。当時解析表で直接確認。
- carryOverBehavior: 据え置き単独を「設定を触らず営業終了→翌営業」の条件として純電源OFF→ONと完全分離した本機固有契約は `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。純電断では天井・状態/モード・有利区間を引継ぐ直接資料があるが、独立条件を推測で固定しない。
- powerCycleBehavior: 電源OFF→ONのみではCZ/ボーナス天井ゲーム数、内部状態/モード、有利区間をCARRY_OVER。液晶側も電断前状態を基本的に引き継ぐ解析表あり。
- gameCounterReset: 設定変更=RESET。純電源OFF→ON=CARRY_OVER。対象はCZ間224G+αとボーナス間573G+αの双方。
- ceilingAfterReset: 設定変更専用の短縮天井は確認できず。リセット後も通常仕様のCZ間224G+α / ボーナス間573G+αを0Gから再計数する契約として扱う。専用短縮値は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- modeAfterReset: 設定変更で内部モード再抽選、純電断で引継ぎ。設定変更専用の公開モード振り分け数値は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- stateAfterReset: 設定変更=内部状態RESET/再抽選。純電断=内部状態CARRY_OVER。
- advantageousSectionReset: 設定変更=非有利区間へ。純電断=有利区間状態をCARRY_OVER。
- resetBenefits: 設定変更専用の短縮天井、朝一当選率上昇等の数値的恩恵は十分な再探索後も確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- resetPenalties: 設定変更専用の主要な不利要素として固定できる公開値なし。前日状態/天井進行を失う点はRESET契約として分離。
- resetDetection: 設定変更時の液晶開始ステージについて資料競合あり。当時解析表Aは「スタジオモード」、HAZUSEは「通常ステージへ」とするため `CONFLICT_RESET_STAGE_STUDIO_MODE_VS_NORMAL_STAGE`。このため画面だけを確定的な設定変更判別契約にはしない。本機固有ガックン率・確定条件は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- numericResetData: 設定変更専用モード振り分け、短縮天井、朝一特定G以内当選率、リセット恩恵発生率は十分な再探索後も固定できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### resetBehavior 再探索メモ

「実況BINGO倶楽部 / 実況ビンゴ倶楽部 / BINGO倶楽部 / S実況BINGO倶楽部KU / 8S0682 / コナミ / KONAMI / KPE」に「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電断 / 天井 / CZ / モード / 状態 / ステージ / ガックン / 有利区間 / 有利区間ランプ」を組み合わせ、HAZUSE、K-Navi、P-WORLD、パチマガスロマガ系、当時解析ブログ、機種DB、導入カレンダーを横断。設定変更と純電断の天井・モード・状態・有利区間契約までは固定できた。設定変更専用の数値的恩恵、固有ガックン値は資料系統を変えても直接値を固定できずUNVERIFIED/PUBLIC_VALUE_NOT_FOUNDとした。

## qualityNotes / conflicts

- HAZUSEは設定5のCZ確率を1/94.1と記載する一方、K-Navi、ぱちんこキュレーション、別当時解析は1/84.1で一致。`CONFLICT_CZ_SETTING5_84_1_MULTI_SOURCE_VS_94_1_HAZUSE` として保持し、canonical=1/84.1。
- 設定変更時の液晶開始ステージは「スタジオモード」と「通常ステージへ」の資料差がある。`CONFLICT_RESET_STAGE_STUDIO_MODE_VS_NORMAL_STAGE`。通常ステージという上位概念にスタジオモードが含まれる可能性はあるが、推測統合しない。
- formalModel `S実況BINGO倶楽部KU`、certificationNumber `8S0682` はHAZUSE機種DBで確認。

## sources

取得日: 2026-09-11

1. K-Navi 実況BINGO倶楽部
   - https://p-kn.com/slot/3222/
   - 2019-06-03、コナミアミューズメント、設定別CZ/ボーナス合算、機械割。
   - reliability: ANALYSIS_DATABASE
2. ぱちんこキュレーション 実況BINGO倶楽部
   - https://pachinko-curation.com/441/
   - 2019-06-03、AT、純増3.0枚/G、50G/50枚、設定別確率/機械割。
   - reliability: ANALYSIS_SECONDARY
3. みんスロ 実況BINGO倶楽部
   - https://minslo.com/%E5%AE%9F%E6%B3%81bingo%E5%80%B6%E6%A5%BD%E9%83%A8/
   - 2019-06-03、純増3.0枚/G、50G/50枚、CZ224G+α/ボーナス573G+α、獲得目安。
   - reliability: ANALYSIS_SECONDARY
4. おスロおパチおいでやす 実況BINGO倶楽部 天井・設定変更
   - https://oslo-opachi.com/2019/06/06/binngo_tennjyou/
   - 当時解析表。設定変更=天井/状態モードRESET・非有利区間・スタジオモード、電源OFF→ON=天井/状態モード/有利区間引継ぎ。CZ224G+α、ボーナス573G+α。
   - reliability: ANALYSIS_CONTEMPORARY
5. HAZUSE 実況BINGO倶楽部 機種DB
   - https://hazuse.com/machine/pachislot/8S0682/
   - 型式S実況BINGO倶楽部KU、検定番号8S0682、2019-06-03、6号機AT、メーカー、純増。
   - reliability: ANALYSIS_DATABASE
6. HAZUSE 実況BINGO倶楽部 設定変更/電断
   - https://hazuse.com/machine/pachislot/8S0682/genre/207/
   - 設定変更時の通常ステージ/非有利区間、電源OFF→ON時のステージ・有利区間引継ぎ。
   - reliability: ANALYSIS_DATABASE
7. ちょんぼりすた 実況BINGO倶楽部
   - https://chonborista.com/slot/konami-slot/81406/
   - 2019-06-03、6号機AT、純増3.0枚/G、50G/50枚、224G+α/573G+α天井。
   - reliability: ANALYSIS_HIGH
8. パチマガスロマガ 実況BINGO倶楽部 ゲーム性
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/konami_slot/07/l.php
   - CZ基本性能・ゲーム性。
   - reliability: ANALYSIS_ARCHIVE
9. パチマガスロマガ 実況BINGO倶楽部 ボーナス
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/konami_slot/07/bb.php
   - BINGO BONUSの基本ゲーム数構造、純増3.0枚/G。
   - reliability: ANALYSIS_ARCHIVE
10. P-WORLD 機種DB 実況BINGO倶楽部
   - https://www.p-world.co.jp/machine/database/8922
   - 機種存在・ゲーム性補助確認。
   - reliability: INDUSTRY_DATABASE
