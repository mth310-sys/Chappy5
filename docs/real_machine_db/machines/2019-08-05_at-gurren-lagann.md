# パチスロ 天元突破グレンラガン

recordNo: 1295
machineName: パチスロ 天元突破グレンラガン
manufacturer: 七匠 / NANASHOW
formalModel: S AT天元突破グレンラガンY
certificationNumber: 9S0371
releaseDate: 2019-08-05
generation: 6号機
systemType: AT / 疑似ボーナス連チャン型

## payoutRateBySetting

| 設定 | 機械割 / 出玉率 |
|---|---:|
| 1 | 97.5% |
| 2 | 99.1% |
| 3 | 100.5% |
| 4 | 104.1% |
| 5 | 107.0% |
| 6 | 111.1% |

HAZUSE、複数解析資料で一致。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

ボーナス初当たり / ボーナス合算:

| 設定 | 初当たり | ボーナス合算 |
|---|---:|---:|
| 1 | 1/522.4 | 1/133.6 |
| 2 | 1/501.1 | 1/126.9 |
| 3 | 1/442.3 | 1/118.6 |
| 4 | 1/367.3 | 1/104.2 |
| 5 | 1/315.3 | 1/94.2 |
| 6 | 1/271.0 | 1/82.8 |

HAZUSE、おスロおパチおいでやす、スロパチクエスト等で一致。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- 約53.2G/50枚。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease

- 疑似ボーナスAT: 約5.0枚/G。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- グレンラガンボーナス: 約162枚。
- ドリルボーナス: 約54枚。
- プレミアムボーナス: 32G継続、純増約5.0枚/G。
- 初当たり後は約80%期待の連チャンシステムへ移行。

## modeSpecificMinimumData

- 通常時はゲーム数解除、CZ「エンキバトル」、スイカポイント系契機等から疑似ボーナスを目指す。
- 通常時天井: 有利区間移行後1120Gで疑似ボーナス当選。
- 天井到達時はグレンラガンボーナス:ドリルボーナス = 約7:3とする解析があり、通常時よりBIG側が優遇される。
- ボーナス後の主要連チャンゾーンは「グレンラガンチャンス」と「謁見の間」。

## resetBehavior

resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE
resetQaLastUpdated: 2026-09-11

- settingChangeBehavior: 設定変更時は天井G数・有利区間をRESETし、非有利区間かつ内部ボーナス非成立状態から開始する。朝一は有利区間移行と内部ボーナス成立がそれぞれ約1/19で競合し、内部ボーナス成立が先ならボーナス後同様の約80%ループ状態へ移行する。
- carryOverBehavior: 据え置き単独の一次表は今回確認できないが、設定変更なしの純電源OFF→ONでは天井G数・有利区間を引き継ぐため、据え置きもCARRY_OVER扱いを `SUPPORTED_BY_POWER_CYCLE_COMPARISON` として保持する。
- powerCycleBehavior: 電源OFF→ONのみでは天井G数・有利区間を引き継ぐ。ステージは主要資料で調査中表記が残るためUNVERIFIED。
- gameCounterReset: 設定変更で1120G天井までの内部G数をRESET。純電断ではCARRY_OVER。
- ceilingAfterReset: 設定変更専用の短縮天井は確認されず、通常上限1120G。朝一恩恵は天井短縮ではなく内部状態競合による約50%の連チャン状態移行。
- modeAfterReset: 朝一は非有利区間・内部ボーナス非成立から開始。有利区間移行が先なら通常側、内部ボーナス成立が先ならボーナス80%ループ状態へ。両契機が同率約1/19とされるため実質約50%で恩恵側へ入る。
- stateAfterReset: 設定変更時は非有利区間かつボーナス非成立状態へ初期化。純電断時の詳細内部状態は天井/有利区間引継ぎ以外を固定できず、推測補完しない。
- advantageousSectionReset: 設定変更で有利区間RESET・非有利区間へ。純電断では引継ぎ。
- resetBenefits: 設定変更時は約50%でボーナス後と同様の約80%ループ状態へ移行する明確な朝一恩恵あり。
- resetPenalties: 前日天井進行・有利区間を失う以外の設定変更専用不利要素は確認されず `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetDetection: 七匠筐体のガックンが有効とする攻略資料あり。ただしメーカー一次仕様ではなく、発生率・確定条件の公開数値は確認できないため `ANALYSIS_SINGLE_CLUE`。有利区間の朝一状態だけで設定変更を常時確定する判別法は固定しない。
- publicMorningNumbers: 設定変更後、有利区間移行約1/19・内部ボーナス成立約1/19。どちらが先に成立するかで状態が分岐するため、約50%でボーナス80%ループ状態へ移行。攻略上は朝一0〜60/70G程度を狙う整理資料があるが、これは立ち回り目安であり機械仕様値とは分離する。

### resetBehavior 再探索メモ

「天元突破グレンラガン / AT天元突破グレンラガン / S AT天元突破グレンラガンY / 七匠 / NANASHOW」に「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 1120G / 天井 / 内部ボーナス / 80%ループ / 1/19 / ガックン / 有利区間」を組み合わせて再探索。HAZUSE、ちょんぼりすた、おスロおパチおいでやす、スロパチクエスト、当時攻略記事を横断。設定変更と純電断の差、および設定変更後約50%の朝一恩恵は複数系統で整合する。ステージ、据え置き単独一次表、ガックン発生率は未固定のため推測しない。

## qualityNotes / conflicts

- 型式 `S AT天元突破グレンラガンY` / 検定番号 `9S0371` はHAZUSEで確認。
- 導入日はHAZUSE、複数当時解析で2019-08-05が一致。一部解析ページに `2018-08-05` の誤記が残るが、記事公開時期・6号機時系列・複数資料一致からcanonicalは2019-08-05とし、誤記を日付CONFLICTには昇格しない。
- 天井は1120G。設定変更後も短縮天井は確認されない。
- 朝一約50%恩恵は「有利区間移行約1/19」と「内部ボーナス成立約1/19」の先着競合として説明されるため、単純な50%抽選テーブルとは区別して保存する。
- ガックンは攻略資料由来でメーカー一次確認なし。

## sources

取得日: 2026-09-11

1. HAZUSE — パチスロ 天元突破グレンラガン
   - https://hazuse.com/machine/pachislot/9S0371/
   - 型式S AT天元突破グレンラガンY、検定番号9S0371、導入2019-08-05、設定別初当たり/合算/機械割、53.2G/50枚、純増約5枚、約162枚/約54枚。
   - reliability: ANALYSIS_HIGH / DATABASE
2. ちょんぼりすた — 天元突破グレンラガン
   - https://chonborista.com/slot/nanashow/85477/
   - 1120G天井、設定変更で天井/有利区間リセット、純電断で引継ぎ、設定変更後約50%の80%ループ状態、有利区間移行/内部ボーナス各約1/19。
   - reliability: ANALYSIS_HIGH
3. おスロおパチおいでやす — グレンラガン 設定解析
   - https://oslo-opachi.com/2019/08/22/gurenragan_settei/
   - 導入2019-08-05、設定別初当たり/合算/機械割、約53.2G/50枚、純増約5枚/G。
   - reliability: ANALYSIS_HIGH
4. スロパチクエスト — 天元突破グレンラガン 設定差
   - https://www.slopachi-quest.com/article/gurrenlagann-settei/
   - 導入2019-08-05、設定別初当たり/合算/機械割、53.2G/50枚、純増約5枚/G。
   - reliability: ANALYSIS_HIGH
5. スロパチクエスト — 天井・朝一
   - https://www.slopachi-quest.com/article/gurrenlagann-tennjou/
   - 天井1120G、天井到達時BIG比率70%。
   - reliability: ANALYSIS_HIGH
6. 真パチスロ備忘録 — グレンラガン6号機 リセ狙い
   - https://sin-surobi.com/gurenragan6/28778/
   - 設定変更後約50%恩恵、有利区間移行/内部ボーナス各約1/19、七匠筐体ガックン有効とする当時攻略整理。
   - reliability: ANALYSIS_SINGLE

## missingFields

- 据え置き単独一次資料による内部状態・天井引継ぎ明示
- 電源OFF→ON時のステージ固定値
- ガックン発生率/確定率の公開数値

coreStatus: COMPLETE_CORE
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE

## conflicts

- 一部解析ページの導入日 `2018-08-05` は、複数の2019-08-05資料と時系列に反する誤記として扱う。canonical値は2019-08-05。
