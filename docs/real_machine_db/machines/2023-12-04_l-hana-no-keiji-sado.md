# L花の慶次～佐渡攻めの章

recordNo: 1608
machineName: L花の慶次～佐渡攻めの章
aliases: L花の慶次 佐渡攻めの章 / スマスロ花の慶次～佐渡攻めの章～ / パチスロ花の慶次～佐渡攻めの章～
manufacturer: EXCITE（ニューギングループ）
formalModel: Lパチスロ花の慶次～佐渡攻めの章～ER
inspectionCode: 330269
releaseDate: 2023-12-04
generation: 6.5号機 / スマスロ
systemType: AT / 疑似ボーナス + ゲーム数上乗せAT
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseDateEvidence
- 遊技日本はEXCITE製 `L花の慶次～佐渡攻めの章～ER` の販売発表を報じ、導入開始2023-12-04予定と明記。
- K-Navi、P-WORLD、複数解析DBも2023-12-04で一致。
- 広島県公安委員会検定通過記事で正式型式 `Lパチスロ花の慶次～佐渡攻めの章～ER` を確認。
- 検定番号 `330269` は実機販売/機種整理資料で確認。公安委員会記事本文では番号まで掲載されていないため番号単独の信頼度は `ANALYSIS_SINGLE` とする。
信頼度: INDUSTRY_HIGH / ANALYSIS_HIGH / INSPECTION_CODE_ANALYSIS_SINGLE

## payoutRateBySetting
| 設定 | 機械割 / 出玉率 |
|---|---:|
| 1 | 97.4% |
| 2 | 98.8% |
| 3 | 101.2% |
| 4 | 104.9% |
| 5 | 109.9% |
| 6 | 114.0% |

複数解析資料で一致。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## initialHitBySetting
| 設定 | 初当り（ボーナス+AT） | AT初当り |
|---|---:|---:|
| 1 | 1/260.7 | 1/474.7 |
| 2 | 1/253.7 | 1/460.1 |
| 3 | 1/247.0 | 1/438.0 |
| 4 | 1/231.5 | 1/398.7 |
| 5 | 1/222.1 | 1/364.0 |
| 6 | 1/211.5 | 1/335.8 |

K-Navi、P-WORLD系機種DB、スロパチクエスト等で一致。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## baseGamesPer50
- 約33.5G/50枚をcanonical採用。
- 一部事前資料に約34G/50枚の丸め表記あり。定義・丸め差としてCONFLICT扱いにはしない。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## netIncrease
- AT「修羅の刻」: 約2.6枚/G。
信頼度: INDUSTRY_HIGH / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## basicPayout
- 初当りはREG / BIG / ATが概ね1:1:1。
- REG「月見酒BONUS」: 15G、AT期待度約15%。
- BIG「ぐ連隊BIG BONUS」: 30G、AT期待度約50%。
- AT「修羅の刻」: 初期50G+α、純増約2.6枚/G。
- AT400G消化で夢戦モード獲得、AT引き戻し期待度約80%。
- 裏モードは期待枚数約3000枚の強化AT状態として公表/解析。
信頼度: INDUSTRY_HIGH / ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時ゲーム数天井: 最大1000G+αで初当り。
- 通常A/B: 最大1000G、チャンス: 最大500G、天国: 最大100G。
- ATスルー天井: ボーナスからATを4連続スルー後、次回5回目の初当りでAT当選。
- 通常時は通常/高確/超高確の内部状態が存在。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_GACKUN_UNVERIFIED
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更時は有利区間、ゲーム数天井、ATスルー回数、内部モードをRESET。
- 内部状態は再抽選。
- 開始ステージは佐渡街道。
- 設定変更後はチャンスまたは天国モード移行濃厚。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き時は内部ゲーム数/天井、ATスルー回数、内部モード、内部状態、有利区間をCARRY_OVERする扱い。
- 電源OFF→ONのみの比較表と整合する。
信頼度: ANALYSIS_HIGH

### powerCycleBehavior
- 純電源OFF→ONのみ: 天井までの内部ゲーム数CARRY_OVER、ATスルー回数CARRY_OVER、内部モードCARRY_OVER、内部状態CARRY_OVER、有利区間CARRY_OVER。
- 開始ステージは設定変更時と同じ佐渡街道で、外見のみでは直接判別しにくい。
信頼度: ANALYSIS_HIGH

### gameCounterReset
- 設定変更時: 内部ゲーム数/天井RESET。
- 据え置き/純電源OFF→ON: CARRY_OVER。
信頼度: ANALYSIS_HIGH

### ceilingAfterReset
- 通常A/B最大1000G+αに対し、設定変更後はチャンスまたは天国へ移行するため最大500G+αへ短縮。
- 天国選択時は100G+α以内で初当り。
- ATスルー回数天井も設定変更時はRESET。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 設定変更時はチャンスまたは天国モード移行濃厚。
- 純電源OFF→ONは内部モードCARRY_OVER。
- チャンス対天国の設定変更専用の具体的振り分け率は、機種名/正式型式/「リセット モード 振り分け」「設定変更 チャンス 天国 振り分け」を変えて複数解析・旧DBを再探索したが公開固定値を確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
信頼度: ANALYSIS_HIGH_FOR_BEHAVIOR / UNVERIFIED_NUMERIC_DISTRIBUTION

### stateAfterReset
- 設定変更時は内部状態を再抽選。
- 設定変更時/ボーナス終了時/AT終了時の状態再抽選は全設定共通で、通常62.5% / 高確31.3% / 超高確6.3%。
- 純電源OFF→ONは内部状態CARRY_OVER。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### advantageousSectionReset
- 設定変更時: 有利区間RESET。
- 据え置き/純電源OFF→ON: CARRY_OVER。
- 通常営業中は差枚+1600枚到達時のAT終了後、AT900G消化時、エンディング終了時なども有利区間リセット契機。
- 設定変更時以外の有利区間リセットでは夢戦モード突入という別恩恵があるため、設定変更リセットと通常営業中の区間切断を同一扱いしない。
信頼度: ANALYSIS_HIGH

### resetBenefits
- 設定変更後はチャンスor天国スタート濃厚で、ゲーム数天井が最大500G+αまで短縮。
- 天国なら100G+α以内で初当り。
- 内部状態は高確31.3% + 超高確6.3% = 高確以上37.6%（表記上合計。元振り分けの丸めに留意）。
- 複数攻略資料で0Gからのリセット台の機械割100%超との評価があるが、これは攻略期待値であり内部抽選固定値ではないため性能コアには混ぜない。
信頼度: ANALYSIS_HIGH

### resetPenalties
- 設定変更時だけ適用される定量的な不利要素は、表記揺れ/型式/「リセット 不利」「朝一 デメリット」で再探索した範囲では確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
信頼度: UNVERIFIED_AFTER_RESEARCH

### resetDetection
- 設定変更/純電源OFF→ONとも開始ステージは佐渡街道で、外見による直接判別は困難。
- 設定変更後は最大500G+α天井のため、朝一で当日500G+αを明確に超えて初当り非当選なら据え置き推測の強い材料。
- なな徹はリセット判別を「現在調査中」と明記。本機固有ガックン条件/発生率は「花の慶次 佐渡攻め / Lパチスロ花の慶次ER / ガックン / リール初動 / 設定変更 / 朝一」で再探索しても固定できず `UNVERIFIED_AFTER_RESEARCH`。
信頼度: ANALYSIS_HIGH_FOR_CEILING_AND_STAGE / UNVERIFIED_GACKUN_AFTER_RESEARCH

### numericResetData
- 設定変更後モード: チャンス or 天国濃厚。
- 設定変更後最大天井: 500G+α。
- 天国天井: 100G+α。
- 設定変更時状態再抽選: 通常62.5% / 高確31.3% / 超高確6.3%。
- 設定変更後の高確以上: 約37.6%（31.3+6.3、丸め値合算）。

### publicMorningNumbers
- 朝一設定変更後最大ゲーム数天井: 500G+α。
- 朝一天国時: 100G+α以内に初当り。
- 朝一状態再抽選: 通常62.5% / 高確31.3% / 超高確6.3%。
- チャンス/天国の個別振り分け率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。

## groupAudit
- 遊技日本、K-Navi、P-WORLD、複数解析で2023-12-04導入を確認。
- 前handoffの2023-12-04 canonical 7機監査を継承し、本機を4機目として処理。
- 群進捗: OPEN 4/7 canonical processed。
- 次は `LモンキーターンV` をNo.1609候補として処理する。
- `パチスロ琉神－30 スイカバージョン` の地域テスト導入境界CONFLICTは継続。

## conflicts
- ベース33.5G/50枚と約34G/50枚は丸め差として33.5Gをcanonical採用。
- 検定番号330269は正式型式との組で二次実機資料から取得。型式自体は公安委員会/業界記事で固定済みだが、番号の公的一次本文照合は今回未取得のため信頼度を分離。

## missingFields
- setting-change chance-vs-heaven exact distribution: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- machine-specific gackun condition/rate: UNVERIFIED_AFTER_RESEARCH
- inspectionCode public-primary cross-check: UNVERIFIED_PRIMARY_SOURCE

## sources
取得日: 2026-09-13
- 遊技日本 / P-WORLDニュース（販売発表・型式・導入・ゲーム性）: https://news.p-world.co.jp/articles/25626/nippon
- 遊技日本 / P-WORLDニュース（検定通過）: https://news.p-world.co.jp/articles/25186/nippon
- グリーンべると 検定通過: https://web-greenbelt.jp/post-75734/
- Amusement Japan 発表: https://amusement-japan.co.jp/article/detail/10003838/
- K-Navi: https://p-kn.com/slot/4045/
- P-WORLD 機種DB: https://www.p-world.co.jp/machine/database/9929
- ぽこすろっと 朝一/天井/電断/有利区間: https://www.nankaikoya.jp/keiji-sado-kitaichi/
- なな徹 朝一/設定変更: https://nana-press.com/kaiseki/machine/653/18225/
- なな徹 モード: https://nana-press.com/kaiseki/machine/653/18228/
- パチ&スロ必勝本 モード: https://hisshobon.com/machineinfo/82217/
- パチマガスロマガ モード: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/excite_slot/17/tj04.php
- スロパチクエスト 設定/基本性能: https://www.slopachi-quest.com/article/hananokeij-sado-settei/
- ぱちんこキュレーション 仕様: https://pachinko-curation.com/41569/
- 実機販売資料（検定番号330269）: https://item.rakuten.co.jp/noanoanoa/hananokeiji-sato/
