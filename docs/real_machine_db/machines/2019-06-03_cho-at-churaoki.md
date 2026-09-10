# 超AT 美ら沖

recordNo: 1288
machineName: 超AT 美ら沖
manufacturer: 七匠
formalModel: S ATちゅら沖S
certificationNumber: 8S0820
releaseDate: 2019-06-03
generation: 6号機
systemType: AT / 疑似ボーナス連荘タイプ

## payoutRateBySetting

| 設定 | 機械割 / 出玉率 |
|---|---:|
| 1 | 97.8% |
| 2 | 98.6% |
| 3 | 100.3% |
| 4 | 103.5% |
| 5 | 106.8% |
| 6 | 112.4% |

K-Navi、ぱちんこキュレーション、一撃等で一致。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

| 設定 | ボーナス初当たり |
|---|---:|
| 1 | 1/459 |
| 2 | 1/446 |
| 3 | 1/424 |
| 4 | 1/389 |
| 5 | 1/337 |
| 6 | 1/292 |

複数解析資料で一致。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- 約50G/50枚

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease

- AT純増: 約4.0枚/G

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- BIG BONUS: 50G、約200枚
- REG BONUS: 15G、約60枚
- ボーナス後は最低50%以上でストック放出モードへ移行する構造。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- 通常時最大天井: 999G。
- 通常モードで前回通常モードの場合の天井: 888G。
- 通常モードで前回ストック放出モードの場合: 999G。
- ストック放出モード基本天井: 111G。
- ストック7個保有時のストック放出モード天井: 222G。
- 物差し用途ではストック個数別の全内部抽選・全モード移行表は収集対象外。

## resetBehavior

resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_CORE_RESET_RESEARCHED

- settingChangeBehavior: 設定変更時は天井ゲーム数をRESET、モードを再抽選。有利区間は非有利区間へ移行し、有利区間ランプは消灯状態から開始する。当時解析/機種DBで直接確認。
- carryOverBehavior: 据え置き単独を純電源OFF→ONと完全に分離した本機固有契約は `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。純電断時の天井・モード・有利区間引継ぎは直接資料で確認しているが、独立条件を推測で固定しない。
- powerCycleBehavior: 電源OFF→ONのみでは天井ゲーム数、モード、有利区間、有利区間ランプ状態をCARRY_OVER。
- gameCounterReset: 設定変更=RESET。純電断=CARRY_OVER。
- ceilingAfterReset: 設定変更後は非有利区間を経て有利区間移行時にモード抽選。通常モード選択時はリセット後の通常系天井として888Gが主要値。ストック放出モードなら基本111G、条件により222G。最大999Gは通常時全体の上限として別管理する。
- modeAfterReset: 設定変更時はモード再抽選。有利区間移行時のストック放出モード選択率は設定1=50.0%、2=50.0%、3=50.0%、4=52.3%、5=55.1%、6=66.8%。これは「設定変更専用抽選値」ではなく、有利区間移行時共通の公開値。設定変更後も必ず有利区間へ再突入するため朝一挙動に直接利用できる値として収録。
- stateAfterReset: 独立した高確/低確等の設定変更専用状態振り分けは公開値を固定できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。本機では主要な朝一差をモード/有利区間で管理する。
- advantageousSectionReset: 設定変更=非有利区間へRESET、数G後に有利区間へ移行。純電断=有利区間状態をCARRY_OVER。
- resetBenefits: 設定変更後の有利区間移行時、設定1〜3でも50.0%以上でストック放出モードが選ばれ、同モード基本天井は111G。設定4=52.3%、5=55.1%、6=66.8%。朝一111Gまでが明確な狙い目になり得る公開数値として保持。ただし抽選率自体は有利区間移行時共通値であり「リセット専用値」と誤記しない。
- resetPenalties: 前日のゲーム数・モード・有利区間を失う。設定変更専用の追加ペナルティ数値は確認できず、状態喪失をRESET契約として保持。
- resetDetection: 設定変更直後は有利区間ランプ消灯。純電断ではランプ状態を引き継ぐため、朝一のランプ状態は変更推測材料になる。ただし有利区間自然終了やホール側対策等で消灯が設定変更の絶対確定条件にはならないため `STRONG_CLUE_NOT_DETERMINISTIC`。本機固有ガックン率は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- numericResetData: 有利区間移行時ストック放出モード率=50.0 / 50.0 / 50.0 / 52.3 / 55.1 / 66.8%（設定1〜6）。同モード基本天井111G、条件付き222G。通常モードのリセット後主要天井888G。数値は朝一比較用に収録し、全内部モード移行テーブルは対象外。

### resetBehavior 再探索メモ

「超AT 美ら沖 / 美ら沖 / ちゅら沖 / S ATちゅら沖S / 8S0820 / 七匠 / NANASHOW」に「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電断 / 天井 / モード / ストック放出 / 有利区間 / 有利区間ランプ / ガックン / 111G / 888G / 999G」を組み合わせ、HAZUSE、K-Navi、一撃、ぱちんこキュレーション、モゲスロ、当時解析ブログ、機種DBを横断。設定変更/純電断の天井・モード・有利区間契約、ランプ挙動、公開モード率まで固定。本機固有ガックン率や据え置き独立条件は資料系統を変えても直接固定できず推測補完しない。

## qualityNotes / conflicts

- 有利区間移行時のストック放出モード率 50.0/50.0/50.0/52.3/55.1/66.8% はHAZUSE解析値。設定変更後の朝一にも適用できるが、「設定変更時だけの専用振り分け」ではないため定義を分離。
- モゲスロ等は朝一を概括して「50%でストック放出モード」とするが、設定4以上はHAZUSEの設定別精密値が存在するため、概括値と設定別値を混同しない。
- formalModel `S ATちゅら沖S` / certificationNumber `8S0820` はHAZUSE機種DBで確認。

## sources

取得日: 2026-09-11

1. K-Navi 超AT 美ら沖
   - https://p-kn.com/slot/3237/
   - 2019-06-03、七匠、設定別初当たり/機械割、純増4.0枚/G、BIG約200枚、REG約60枚。
   - reliability: ANALYSIS_DATABASE
2. ぱちんこキュレーション 超AT 美ら沖
   - https://pachinko-curation.com/567/
   - 2019-06-03、6号機AT、50G/50枚、純増4.0枚/G、設定別初当たり/機械割、BIG/REG基本性能。
   - reliability: ANALYSIS_SECONDARY
3. 一撃 超AT 美ら沖
   - https://1geki.jp/slot/s_churaoki/
   - 2019-06-03、純増4.0枚/G、BIG約200枚、REG約60枚、ボーナス後ストック放出モード移行率最低50%。
   - reliability: ANALYSIS_HIGH
4. HAZUSE 超AT 美ら沖 機種DB
   - https://hazuse.com/machine/pachislot/8S0820/
   - 型式S ATちゅら沖S、検定番号8S0820、2019-06-03、七匠、6号機AT、純増。
   - reliability: ANALYSIS_DATABASE
5. HAZUSE 超AT 美ら沖 設定変更/電断
   - https://hazuse.com/machine/pachislot/8S0820/genre/207/
   - 設定変更=ゲーム数RESET/モード再抽選/非有利区間/ランプ消灯、電源OFF→ON=ゲーム数/モード/有利区間/ランプ引継ぎ。
   - reliability: ANALYSIS_DATABASE
6. HAZUSE 超AT 美ら沖 モード/天井
   - https://hazuse.com/machine/pachislot/8S0820/
   - 通常888/999G、ストック放出111/222G、最大999G、有利区間移行時ストック放出モード率50.0〜66.8%。
   - reliability: ANALYSIS_DATABASE
7. おスロおパチおいでやす 超AT 美ら沖 天井
   - https://oslo-opachi.com/2019/06/07/churaoki_tennjyou/
   - 最大999G、設定変更後の通常モード888G、ストック放出モードの短い天井等。
   - reliability: ANALYSIS_CONTEMPORARY
8. モゲスロ 超AT 美ら沖
   - https://moge-site.com/archives/21996
   - リセット時ランプ消灯、朝一1〜111Gの狙い目、概括50%ストック放出モード。
   - reliability: ANALYSIS_CONTEMPORARY
