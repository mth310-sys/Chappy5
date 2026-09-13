# スマスロ バイオハザード™ ヴィレッジ

recordNo: 1617
machineName: スマスロ バイオハザード™ ヴィレッジ
aliases: スマスロ バイオハザード ヴィレッジ / Lバイオハザード ヴィレッジ / バイオヴィレッジ
manufacturer: アデリオン（製造） / エンターライズ
formalModel: LバイオハザードヴィレッジXA
inspectionCode: 3S1160
releaseDate: 2024-01-09
generation: 6.5号機 / スマスロ
systemType: AT / CZ・疑似ボーナス経由型ゲーム数管理AT
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseDateEvidence
- パチ＆スロ必勝本、K-Navi、ハズセ、複数機種DBで2024-01-09導入が一致。
- 2024-01-09群の業界新台スケジュールにも掲載済み。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modelEvidence
- 市場投入機の型式は `LバイオハザードヴィレッジXA`。ハズセ機種DBと当時の新台整理資料で一致。
- 検定番号 `3S1160` はハズセ掲載値。公的検定原典で番号そのものは今回固定できていないため番号のみ `ANALYSIS_SINGLE_FOR_INSPECTION_CODE`。
- 2023-09にエンターライズ製 `Lバイオハザード ヴィレッジZE` が先行して検定通過しているが、その後アデリオン製 `XA` が別型式として通過し、市場投入機はXA。ZEの性能を本レコードへ混入しない。
confidence: INDUSTRY_FOR_VARIANT_HISTORY / ANALYSIS_HIGH_FOR_MARKET_MODEL

## corePerformance
payoutRateBySetting:
- 1: 98.2%
- 2: 99.1%
- 3: 100.9%
- 4: 105.4%
- 5: 107.7%
- 6: 111.0%
initialHitBySetting:
- setting1: CB等初当たり 1/281.5 / AT 1/445.3
- setting2: CB等初当たり 1/275.3 / AT 1/434.1
- setting3: CB等初当たり 1/264.5 / AT 1/415.7
- setting4: CB等初当たり 1/240.3 / AT 1/372.9
- setting5: CB等初当たり 1/229.3 / AT 1/354.4
- setting6: CB等初当たり 1/224.2 / AT 1/342.8
baseGamesPer50: 約32.9G/50枚（設定1推定値）
netIncrease: 約2.5枚/G
basicPayout:
- AT「ハザードRUSH」: ゲーム数管理型、純増約2.5枚/G、設定1期待枚数約607枚。
- AT初当たり時は初期G数決定ゾーン「シューティングアタック」へ突入。8G+α、毎ゲーム上乗せ、平均上乗せ約100G。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時は規定ゲーム数・CZ「パニックゾーン」等から「クライマックスバトル（CB）」を目指し、CB成功でAT。
- 通常最大天井は750G+α（資料によって749G+α表記）。到達でCB、まれにAT直撃の可能性。
- モード別天井: 通常A 750G / 通常B 650G / 通常C 600G / 天国 150G / 設定変更モード 550G。
- CBは前半15G + 後半7Gを基本とする1戦型で、AT期待度約63%とする主要解析あり。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_UNVERIFIED_GACKUN_AND_INSPECTION_PRIMARY
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更時は有利区間RESET。
- 天井までのゲーム数をRESET。
- 内部モードは通常モードではなく「設定変更モード」へ移行。
- 内部状態は再抽選。
- 設定変更モードの天井は550G+α。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き時は、設定変更を伴わない電源OFF→ONと同系統として天井進行・内部モード・内部状態をCARRY_OVERする機種特化解析が一致。
- 有利区間も設定変更がなければ継続扱い。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_CONSISTENT

### powerCycleBehavior
- 純電源OFF→ON: 天井ゲーム数をCARRY_OVER。
- 内部モードをCARRY_OVER。
- 内部状態をCARRY_OVER。
- 有利区間もCARRY_OVERとして扱う機種特化解析あり。
- メニュー画面/開始ステージの電断後表示は主要資料で「調査中」が残り、固定しない。
confidence: ANALYSIS_HIGH_FOR_CEILING_MODE_STATE / ANALYSIS_SINGLE_TO_HIGH_FOR_ADVANTAGEOUS_SECTION

### gameCounterReset
- 設定変更時: RESET。
- 据え置き/純電源OFF→ON: CARRY_OVER。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
- 通常最大: 750G+α（749G+α表記資料あり。実質同定義の表示差として保持）。
- 設定変更後: 550G+αへ短縮。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 設定変更時は専用の「設定変更モード」へ移行。
- 設定変更モード天井は550G。
- 設定変更モードは150G以内の初当たり期待度20%とする解析値が公開されている。
- 通常A/B/C/天国のいずれかへ振り分ける方式ではなく、朝一専用モードとして扱う。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH_FOR_MODE_EXISTENCE / ANALYSIS_HIGH_FOR_20_PERCENT

### stateAfterReset
- 設定変更時: 内部状態を再抽選。
- 据え置き/純電源OFF→ON: 内部状態をCARRY_OVER。
- 朝一の内部状態の具体的振り分け率は、表記揺れ・型式名・メーカー名と「設定変更/朝一/内部状態/振り分け」で主要解析・旧DBを再探索しても固定公開値を確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_RESET_CONTRACT / UNVERIFIED_NUMERIC_DISTRIBUTION

### advantageousSectionReset
- 設定変更時: RESET。
- AT終了時の一部・エンディング終了後にも有利区間RESETあり。
- 設定変更以外の有利区間RESET時は「パンデミックチャンス」へ移行し、ミランダのクライマックス7でAT引き戻し抽選。設定変更時はこの恩恵の対象外。
- 据え置き/純電源OFF→ON: CARRY_OVERとして扱う。
confidence: ANALYSIS_HIGH

### resetBenefits
- 最大天井が通常750G+α → 550G+αへ短縮。
- 設定変更専用モードへ入り、150G以内の初当たり期待度20%。
- 朝一から深い通常A天井まで追う必要がなく、リセット狙いの比較可能な価値を持つ。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetPenalties
- 設定変更時以外の有利区間リセットに付随する「パンデミックチャンス（AT引き戻し期待度約55%）」は設定変更時には発生しない。
- 据え置きで保持される内部モード・内部状態は設定変更で失われるため、前日状況によってはリセットが必ずしも有利とは限らない。
confidence: ANALYSIS_HIGH

### resetDetection
- 朝一550G+αを消化してもCB/規定G数契機の初当たりが発生しない場合は据え置き濃厚材料。
- 主要解析ではリセット判別自体を「調査中」としており、開始ステージ/メニュー画面だけでの確定判別条件は固定できない。
- 本機固有のガックン条件・発生率は `バイオハザード ヴィレッジ / LバイオハザードヴィレッジXA / ZE / アデリオン / エンターライズ + ガックン / リールガックン / 設定変更 / 据え置き / リセット判別` へ検索語を変更し再探索したが、高信頼な機種固有公開値を確認できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_550G_DISCRIMINATION / UNVERIFIED_FOR_GACKUN

### numericResetData
- 通常最大天井: 750G+α（749G+α表記あり）。
- 設定変更モード天井: 550G+α。
- 設定変更モード150G以内初当たり期待度: 20%。
- 通常モード別天井: 通常A 750G / 通常B 650G / 通常C 600G / 天国 150G。
- 朝一内部状態振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。

### publicMorningNumbers
- 天井短縮: 750G+α → 550G+α。
- 設定変更専用モード: 150G以内初当たり期待度20%。
- 朝一内部状態の設定別/一律振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。

## conflicts
- 型式履歴: 2023-09にエンターライズ `Lバイオハザード ヴィレッジZE` が先行検定通過。その後アデリオン `LバイオハザードヴィレッジXA` が別型式として確認され、市場投入機はXA。両型式を同一レコードの性能値として混ぜない。
- 通常最大天井は「750G消化」と「749G+α」の表記差がある。到達ゲームの数え方/前兆表現の差として双方を保持し、物差し値は最大約750G+αとする。
- 一部実戦集計に「設定変更時150G以内当選率約50%」という観測値がある一方、解析上の設定変更モード公開値は20%。実戦値は状況混在・サンプル依存のためcanonicalには採らず、公開解析20%を採用。

## missingFields
- machine-specific gackun condition/rate: UNVERIFIED_AFTER_RESEARCH
- reset-specific internal-state numeric distribution: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- power-cycle menu/stage display contract: UNVERIFIED_AFTER_RESEARCH
- inspectionCode public-primary-source confirmation: UNVERIFIED_AFTER_RESEARCH

## groupAudit
- 2024-01-09 canonical群5機のうち2機目として処理。
- 吉宗RISING — No.1616 DONE
- スマスロ バイオハザード ヴィレッジ — No.1617 DONE
- Lパチスロ マクロスフロンティア4 — NEXT
- L 仮面ライダー 7RIDERS — PENDING
- パチスロ武装神姫 — PENDING
- 群status: `2024-01-09_GROUP_OPEN_2_OF_5_CANONICAL_PROCESSED`

## sources
取得日: 2026-09-13
- パチ＆スロ必勝本 基本スペック/設定変更・電源OFF→ON: https://p.hisshobon.jp/vpage/2578/2
- なな徹 朝一・設定変更・有利区間: https://nana-press.com/kaiseki/machine/661/18441/
- なな徹 モード詳細: https://nana-press.com/kaiseki/machine/661/18444/
- なな徹 シューティングアタック: https://nana-press.com/kaiseki/machine/661/18448/
- なな徹 エンディング/パンデミックチャンス: https://nana-press.com/kaiseki/machine/661/18453/
- ちょんぼりすた 総合解析/スペック/天井/有利区間: https://chonborista.com/slot/enta-slot/199045/
- ぽこすろっと 天井/朝一/モード/リセット: https://www.nankaikoya.jp/biohazard-village-kitaichi/
- スロパチクエスト 朝一設定変更/電源OFF→ON: https://www.slopachi-quest.com/article/biohazard-village-tenjou/
- パチスロメソッド 設定変更/電源OFF→ON: https://slotmethod.jp/archives/18423/
- パチマガスロマガ シューティングアタック: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/enterrise_slot/28/tk01.php
- パチマガスロマガ AT「ハザードRUSH」: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/enterrise_slot/28/at02.php
- P-WORLD 機種DB: https://www.p-world.co.jp/machine/database/9932
- グリーンべると ZE検定通過: https://web-greenbelt.jp/post-75870/
- P-WORLD/グリーンべると ZE検定通過転載: https://news.p-world.co.jp/articles/25280/greenbelt
- ハズセ 市場投入XA型式/検定番号/導入日: https://hazuse.com/hd/3s1160/
- スロパチネット 2024-01-09導入/XA型式: https://slopachi-net.com/slot-newmachinedebut
- SUNTAC 1/9導入実績/XA型式: https://suntac.jp/news/page/16/

## notes
- 実機完全再現用の通常時全モード移行率、全小役別抽選、AT内部上乗せ振り分け等は本DB目的外のため収集しない。
- `スマスロ バイオハザード:ヴェンデッタ`（2023）および `スマスロ バイオハザード5`（2025）は別機種。検索混入を除外した。
