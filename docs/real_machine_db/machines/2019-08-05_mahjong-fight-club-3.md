# 麻雀格闘倶楽部参

recordNo: 1294
machineName: 麻雀格闘倶楽部参
manufacturer: コナミアミューズメント
formalModel: S麻雀格闘倶楽部3KR
certificationNumber: 9S0023
releaseDate: 2019-08-05
generation: 6号機
systemType: AT / 差枚数管理型AT / 周期対局型

## payoutRateBySetting

| 設定 | 機械割 / 出玉率 |
|---|---:|
| 1 | 97.9% |
| 2 | 98.9% |
| 3 | 100.3% |
| 4 | 103.1% |
| 5 | 105.7% |
| 6 | 110.2% |

HAZUSE、K-Navi、ちょんぼりすた、おスロおパチおいでやす等で一致。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

AT「格闘倶楽部RUSH」初当たり:

| 設定 | AT初当たり |
|---|---:|
| 1 | 1/298.9 |
| 2 | 1/289.9 |
| 3 | 1/278.7 |
| 4 | 1/252.1 |
| 5 | 1/260.0 |
| 6 | 1/229.5 |

設定5が設定4より重い非単調テーブルは複数資料で同一のため、そのまま保持。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- 約50G/50枚。

HAZUSE、ちょんぼりすた、おスロおパチおいでやす等で一致。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease

- AT「格闘倶楽部RUSH」: 約5.0枚/G。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- 差枚数管理型AT。
- 対局でアガった点数をAT初期差枚数へ変換し、初期枚数は39〜480枚。
- AT中の上乗せ発生率は通常時約1/8.9、高確率中約1/5.2。
- AT終了後は40Gの引き戻し対局「真龍ロード」へ移行。親対局扱いでアガリ点数1.5倍、八連荘達成時は480枚+αでAT復帰。

比較用には固定1セットG数ではなく、初期差枚数39〜480枚 + 純増約5.0枚/Gを基本性能として保持する。

## modeSpecificMinimumData

- 通常時はリアル対局を軸にした周期進行。
- 天井は通常時777G消化後の対局で勝利確定。777G到達即ATではなく、到達後の対局勝利を経由。
- AT直撃は周期開始時に抽選される。設定別直撃率は設定1 1/48317、2 1/32808、3 1/24679、4 1/8494、5 1/16690、6 1/4300だが、これは通常設定判別値でありresetBehavior専用値ではないため補助値扱い。

## resetBehavior

resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE
resetQaLastUpdated: 2026-09-11

- settingChangeBehavior: 設定変更時は天井G数・内部状態・有利区間をRESETし、非有利区間へ移行。朝一ステージは「ちょっとタイム」から開始。
- carryOverBehavior: 据え置き時は設定変更を伴わないため、天井G数・内部状態・有利区間を引き継ぐ扱いが妥当とする複数攻略資料の電源OFF→ON比較と整合する。ただし「据え置き」だけを独立行で明示した一次資料は今回確認できず、`SUPPORTED_BY_POWER_CYCLE_COMPARISON` として保持。
- powerCycleBehavior: 純電源OFF→ONでは天井G数・内部状態・有利区間・ステージを引き継ぐ。
- gameCounterReset: 設定変更で内部天井G数RESET。純電断ではCARRY_OVER。据え置きは上記比較からCARRY_OVER扱い。
- ceilingAfterReset: 設定変更専用の短縮天井は確認されず `NONE_CONFIRMED_AFTER_RESEARCH`。通常どおり777G消化後の対局勝利確定が上限基準。
- modeAfterReset: 設定変更後は非有利区間・「ちょっとタイム」から開始。設定変更専用のモード振り分け表・朝一だけの優遇周期率は十分な再探索後も確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- stateAfterReset: 設定変更で内部状態RESET。純電断では内部状態引継ぎ。
- advantageousSectionReset: 設定変更で有利区間RESET・非有利区間へ。純電断では有利区間を引継ぐ。通常時は有利区間ランプが消灯するタイプとする攻略資料があり、ランプ単独による朝一リセット判別には使えない。
- resetBenefits: 設定変更専用の天井短縮・専用高確率・専用AT当選率等は確認されず、主要攻略資料は「リセット恩恵 特になし」と整理。`NONE_CONFIRMED_AFTER_RESEARCH`。
- resetPenalties: 前日の天井進行・内部状態・有利区間を失う以外の設定変更専用不利要素は確認されず `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetDetection: 有利区間ランプは通常時消灯型のため変更判別不可とする解析あり。一方、筐体ゲーム数が据え置き時に前日値を引き継ぐという攻略資料があり、前日0Gヤメ等を除けば「朝一0Gなら設定変更濃厚 / 0G以外なら据え置き濃厚」とする判別法がある。メーカー一次仕様ではないため `ANALYSIS_SINGLE_STRONG_CLUE_NOT_DETERMINISTIC` とする。ガックンによる本機固有の確定/濃厚判別は十分な再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- publicMorningNumbers: 設定変更専用の短縮天井G・朝一AT期待度・朝一専用モード振り分け・リセット恩恵発生率は公開固定値を確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### resetBehavior 再探索メモ

「麻雀格闘倶楽部参 / 麻雀格闘倶楽部3 / S麻雀格闘倶楽部3KR / コナミアミューズメント」に「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 天井短縮 / 内部状態 / ちょっとタイム / ガックン / 有利区間 / 有利区間ランプ / ゲーム数引継ぎ」を組み合わせて再探索。HAZUSE、K-Navi、ちょんぼりすた、DMMぱちタウン、PachiNow、おスロおパチおいでやす、パチスロメソッド、ぱちんこキュレーション、KONAMI現行製品アーカイブを横断。設定変更と純電断の差は複数系統で一致。設定変更専用短縮天井・専用モード振り分け・専用朝一当選率は確認できず推測補完しない。

## qualityNotes / conflicts

- 型式 `S麻雀格闘倶楽部3KR` / 検定番号 `9S0023` はHAZUSEで確認。ぱちんこキュレーションの2019-06-06検定通過情報も同型式を記載。
- 導入日2019-08-05はHAZUSE、K-Navi、ちょんぼりすた、おスロおパチおいでやす等で一致。
- 設定別AT初当たり・機械割は複数解析で一致。設定5のAT初当たりが設定4より重い点も各資料で同じため誤記修正しない。
- 天井は「777G」「777G+α」の表記差がある。実態は777G消化後の対局勝利確定であり、777G即ATではないため、`DEFINITION_DIFFERENCE_777G_TRIGGER_VS_777G_PLUS_BATTLE` として定義分離し平均化しない。
- 据え置き単独表は今回の主要資料では少なく、電源OFF→ONの引継ぎ比較から支持されるため、純電断直接確認より一段低い信頼注記を付ける。
- 筐体ゲーム数による変更判別は攻略サイト由来で、メーカー一次公表ではない。

## sources

取得日: 2026-09-11

1. HAZUSE — 麻雀格闘倶楽部 参
   - https://hazuse.com/machine/pachislot/9S0023/
   - 型式S麻雀格闘倶楽部3KR、検定番号9S0023、導入2019-08-05、AT初当たり、機械割、約50G/50枚、純増約5枚。
   - reliability: ANALYSIS_HIGH / DATABASE
2. K-Navi — 麻雀格闘倶楽部参
   - https://p-kn.com/slot/3265/
   - 導入2019-08-05、設定別AT初当たり/機械割、差枚数管理AT、初期39〜480枚、純増約5.0枚/G。
   - reliability: ANALYSIS_HIGH
3. ちょんぼりすた — 麻雀格闘倶楽部3
   - https://chonborista.com/slot/konami-slot/87864/
   - 約50G/50枚、設定別AT初当たり/機械割、777G天井、設定変更/電源OFF→ON比較、非有利区間、ちょっとタイム。
   - reliability: ANALYSIS_HIGH
4. DMMぱちタウン — 麻雀格闘倶楽部参
   - https://p-town.dmm.com/machines/3488
   - AT間777G後対局勝利、設定変更で非有利区間・ちょっとタイム開始。
   - reliability: ANALYSIS_HIGH / DATABASE
5. PachiNow — 麻雀格闘倶楽部参 朝一設定変更
   - https://www.pachinow.jp/s7/marjan3-5.php
   - 設定変更で天井G/内部状態リセット・ちょっとタイム、電源ON/OFFで天井G/内部状態/ステージ引継ぎ。
   - reliability: ANALYSIS_SINGLE
6. おスロおパチおいでやす — 麻雀格闘倶楽部3 天井・朝一
   - https://oslo-opachi.com/2019/06/27/majanfightclub3_tennjou/
   - 導入日、約50G、純増約5枚、777G+α天井、朝一リセット関連。
   - reliability: ANALYSIS_HIGH
7. おスロおパチおいでやす — 麻雀格闘倶楽部3 設定判別
   - https://oslo-opachi.com/2019/08/05/majanfightclub3_settei/
   - AT初当たり、機械割、AT直撃率等。
   - reliability: ANALYSIS_HIGH
8. パチスロメソッド — 麻雀格闘倶楽部3 天井・リセット判別
   - https://slotmethod.jp/archives/12694/
   - 通常時有利区間ランプ消灯型、筐体ゲーム数引継ぎを利用したリセット判別、リセット恩恵なし。
   - reliability: ANALYSIS_SINGLE
9. ぱちんこキュレーション — 麻雀格闘倶楽部3
   - https://pachinko-curation.com/1201/
   - 2019-06-06に型式 `S麻雀格闘倶楽部3KR` の検定通過情報、導入前情報。
   - reliability: INDUSTRY_AGGREGATION
10. KONAMI パチンコ・パチスロ製品アーカイブ
   - https://www.konami.com/amusement/psm/ps/
   - メーカー製品系統確認用。旧「参」個別ページは現行一覧検索から直接固定できなかったため、個別性能値の一次根拠には使用しない。
   - reliability: OFFICIAL_CONTEXT

## status

COMPLETE_CORE
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE
