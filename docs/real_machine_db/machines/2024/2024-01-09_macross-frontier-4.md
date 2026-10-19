# Lパチスロ マクロスフロンティア4

recordNo: 1618
machineName: Lパチスロ マクロスフロンティア4
aliases: Lマクロスフロンティア4 / スマスロ マクロスF4 / マクロスフロンティア4
manufacturer: SANKYO
formalModel: Lマクロスフロンティア4bA
inspectionCode: 330403
releaseDate: 2024-01-09
generation: 6.5号機 / スマスロ
systemType: AT / 疑似ボーナス経由型ゲーム数管理AT + 上位ST型AT
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseDateEvidence
- SANKYO公式オンライン博物館は導入年月を2024.01と掲載。
- パチ＆スロ必勝本、ハズセ、K-Navi、P-WORLD系機種DBで2024-01-09導入が一致。
confidence: OFFICIAL_FOR_MONTH / ANALYSIS_HIGH_FOR_EXACT_DATE

## modelEvidence
- SANKYO公式オンライン博物館が販売名 `Lパチスロ マクロスフロンティア4`、型式名 `Lマクロスフロンティア4bA` を掲載。
- ハズセが型式名 `Lマクロスフロンティア4bA`、検定番号 `330403` を掲載。
- 公的検定原典で検定番号そのものは今回固定できていないため、inspectionCodeは `ANALYSIS_SINGLE_FOR_INSPECTION_CODE` とする。
confidence: OFFICIAL_FOR_FORMAL_MODEL / ANALYSIS_SINGLE_FOR_INSPECTION_CODE

## corePerformance
payoutRateBySetting:
- 1: 97.7%
- 2: 98.7%
- 3: 101.2%
- 4: 105.5%
- 5: 110.1%
- 6: 114.9%
initialHitBySetting:
- setting1: 歌姫BONUS 1/276 / AT 1/507
- setting2: 歌姫BONUS 1/271 / AT 1/495
- setting3: 歌姫BONUS 1/258 / AT 1/461
- setting4: 歌姫BONUS 1/237 / AT 1/407
- setting5: 歌姫BONUS 1/216 / AT 1/359
- setting6: 歌姫BONUS 1/204 / AT 1/331
baseGamesPer50: 約32G/50枚
netIncrease: 通常AT 約1.5枚/G / 疑似ボーナス・上位AT 約5.0枚/G
basicPayout:
- AT「バルキリータイム」: ゲーム数管理型、純増約1.5枚/G。初当たり時のトライアングルチャンスで初期G数を決定。
- AT中疑似ボーナス: シェリル/ランカは20G、アルトは50G、純増約5.0枚/G。
- 上位AT「超時空バルキリータイム」: 5GのST型、もってけボーナス20G以上とのループ、純増約5.0枚/G、ループ期待度約90%。終了後「最終決戦」の引き戻し期待度は約50%。
confidence: OFFICIAL_FOR_PRIMARY_HIT_RATES_AND_SYSTEM / ANALYSIS_HIGH_FOR_PAYOUT_RATE_BASE_AND_DETAILED_AT_VALUES

## modeSpecificMinimumData
- 通常時は液晶規定G数・レア役等から歌姫BONUSを目指し、BONUS中/終了後の抽選からATへ移行。
- ゲーム数天井は「液晶1500G+α」または「実ゲーム1000G+α」で歌姫BONUS以上。
- ボーナススルー回数天井は1 / 3 / 5 / 7 / 10回の振り分けがあり、最大10連続AT非当選後の11回目BONUSでAT濃厚。
- 通常モード別液晶天井: 通常A/B 1500G、チャンスA/B 900G、バルキリータイムA/B 800G、強チャンス600G、天国A/B 100G。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_UNVERIFIED_GACKUN_AND_INSPECTION_PRIMARY
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更時は有利区間RESET。
- 天井ゲーム数・歌姫BONUSスルー回数をRESET。
- モードを再抽選し、バルキリータイムA / 強チャンス / 天国Aのいずれかへ移行。
- 内部状態はRESETされ、パチ＆スロ必勝本では「通常へ」と明記。
- 開始ステージは美星学園 or 市街地を1:1で選択。
- 設定変更時は内部的な規定ゲーム数短縮/ゲーム数加算抽選が行われ、見た目から単純には判別できない。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き時は有利区間をCARRY_OVER。
- 天井進行、歌姫BONUSスルー回数、内部モード、内部状態をCARRY_OVER。
- 液晶ゲーム数カウンターやメニュー表示は原則リセットされるため、表示0相当だけでは変更判別できない。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### powerCycleBehavior
- 純電源OFF→ON: 天井ゲーム数をCARRY_OVER。
- 歌姫BONUSスルー回数をCARRY_OVER。
- 内部モードをCARRY_OVER。
- 内部状態をCARRY_OVER。
- 設定変更を伴わないため有利区間もCARRY_OVERとして扱う解析が一致。
- 開始ステージは基本的に美星学園 or 市街地（1:1）。
confidence: ANALYSIS_HIGH / DIRECT_MACHINE_SPECIFIC_COMPARISON

### gameCounterReset
- 設定変更時: RESET。ただし設定変更時専用の内部ゲーム数短縮/加算抽選が存在。
- 据え置き/純電源OFF→ON: 内部ゲーム数・天井進行CARRY_OVER。
- 見た目の液晶ゲーム数は朝一リセット表示となるのが基本。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
- 通常最大: 液晶1500G+α または実ゲーム1000G+α。
- 設定変更後は移行モードが限定されるため、液晶上の最大天井は800G+αへ短縮。
- 設定変更時の最深バルキリータイムAは液晶800G天井で、ゲーム数加算を加味した平均実ゲーム数は約530G前後。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 設定変更時のモード振り分け:
  - バルキリータイムA: 約25%
  - 強チャンス: 約50%
  - 天国A: 約25%
- 各液晶天井はバルキリータイムA 800G / 強チャンス600G / 天国A 100G。
- 据え置き/純電源OFF→ONでは前日の内部モードをCARRY_OVER。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### stateAfterReset
- 設定変更時: 内部状態RESET。パチ＆スロ必勝本は「通常へ」と明記。
- 据え置き/純電源OFF→ON: 内部状態CARRY_OVER。
- 設定変更専用の内部状態振り分け率は、主要解析・旧DBを表記揺れ/型式名/メーカー名と「朝一/設定変更/内部状態/振り分け」で再探索したが、状態は通常開始として直接明記されるため数値振り分け自体はNOT_APPLICABLE。
confidence: ANALYSIS_HIGH

### advantageousSectionReset
- 設定変更時: RESET。
- 据え置き/純電源OFF→ON: CARRY_OVER。
- 設定変更以外では上位AT終了時の一部・エンディング終了後にも有利区間RESET。
- 設定変更以外の有利区間RESET時は「最終決戦」に突入するが、設定変更時はこの恩恵の対象外。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetBenefits
- 設定変更後はバルキリータイムA / 強チャンス / 天国Aのみに限定され、最大液晶天井が1500G → 800Gへ短縮。
- モード振り分けは25% / 50% / 25%で、75%が液晶600G以内、25%が液晶100G天井の天国A。
- 設定1でも「歌姫BONUS or AT当選まで」の条件付き朝一機械割が約102%とする公開解析値あり。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetPenalties
- 設定変更以外の有利区間RESET時に付随する「最終決戦（上位AT引き戻し期待度約50%）」は、設定変更時には付与されない。
- 据え置きで保持される前日のモード/内部状態/スルー回数は設定変更で失われるため、前日条件によってはリセットが常に有利とは限らない。
confidence: ANALYSIS_HIGH

### resetDetection
- 設定変更時/据え置き時とも朝一の液晶ゲーム数・メニュー表示がリセットされ、開始ステージも美星学園 or 市街地のため単純な見た目判別は困難。
- 歌姫チャージ、歌前兆、AT中など通常時以外の状態から開始した場合は据え置き濃厚。
- 朝一に液晶800G+αを超えて規定G数契機のBONUS/ATが発生しない場合は、設定変更時最大天井と整合しないため据え置き濃厚材料。
- 設定変更時は内部的なゲーム数加算/短縮抽選があるため、前兆開始G数のズレだけで設定変更/据え置きを確定できない。
- 本機固有のガックン条件・発生率は `マクロスフロンティア4 / マクロスF4 / Lマクロスフロンティア4bA / SANKYO + ガックン / リールガックン / 設定変更 / 朝一 / 据え置き` と検索語・資料系統を変え、主要解析・機種DBを再探索したが高信頼な機種固有情報を確認できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_GAME_BEHAVIOR / UNVERIFIED_FOR_GACKUN

### numericResetData
- 設定変更モード振り分け: バルキリータイムA 約25% / 強チャンス 約50% / 天国A 約25%。
- 設定変更後液晶最大天井: 800G+α。
- バルキリータイムA: 800G（平均実ゲーム約530G前後）。
- 強チャンス: 600G（平均実ゲーム約400G前後）。
- 天国A: 100G（平均実ゲーム約70G前後）。
- 設定1・設定変更台を歌姫BONUS or AT当選まで打った条件付き機械割: 約102%。
- 開始ステージ: 美星学園 / 市街地 = 1:1。

### publicMorningNumbers
- リセット時モード: バルキリータイムA 約25% / 強チャンス 約50% / 天国A 約25%。
- 最大液晶天井: 通常1500G+α → 設定変更後800G+α。
- 設定1の条件付き朝一機械割: 約102%。
- 開始ステージ振り分け: 美星学園50% / 市街地50%。

## conflicts
- 検定番号 `330403` はハズセで確認したが、公的検定原典で今回番号そのものを再固定できていないため一次確認待ち。
- 通常天井は「液晶1500G+α」と「実ゲーム1000G+α」が併存する二重天井仕様であり、片方へ平均/統合しない。
- 設定変更後にはモード制限による最大800G天井に加え内部的なG数短縮/加算抽選がある。公開される25/50/25%モード振り分けと、表示されない短縮抽選を同じ数値として混同しない。

## missingFields
- machine-specific gackun condition/rate: UNVERIFIED_AFTER_RESEARCH
- inspectionCode public-primary-source confirmation: UNVERIFIED_AFTER_RESEARCH
- reset-specific hidden game-count shortening distribution: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

## groupAudit
- 2024-01-09 canonical群5機のうち3機目として処理。
- 吉宗RISING — No.1616 DONE
- スマスロ バイオハザード ヴィレッジ — No.1617 DONE
- Lパチスロ マクロスフロンティア4 — No.1618 DONE
- L 仮面ライダー 7RIDERS — NEXT
- パチスロ武装神姫 — PENDING
- 群status: `2024-01-09_GROUP_OPEN_3_OF_5_CANONICAL_PROCESSED`

## sources
取得日: 2026-09-13
- SANKYOオンライン博物館 型式/導入月/公式スペック: https://www.sankyo-fever.jp/collection/955/
- パチ＆スロ必勝本 基本スペック: https://hisshobon.com/machineinfo/82319/
- パチ＆スロ必勝本 天井・設定変更・電源OFF→ON: https://p.hisshobon.jp/machine/4202/1/98752
- パチ＆スロ必勝本 朝イチ挙動: https://hisshobon.com/machineinfo/82251/
- なな徹 朝一・設定変更・有利区間: https://nana-press.com/kaiseki/machine/272/18641/
- なな徹 天井・スルー回数: https://nana-press.com/kaiseki/machine/272/18639/
- ちょんぼりすた 総合解析/朝一/モード: https://chonborista.com/slot/sankyo-slot/200279/
- ハズセ 型式/検定番号/導入日/ベース: https://hazuse.com/hd/sx0062/
- ハズセ 設定別初当たり/ベース: https://hazuse.com/machine/pachislot/SX0062/
- P-WORLD 機種DB/AT中ボーナス: https://www.p-world.co.jp/machine/database/9935
- パチスロメソッド 電源OFF→ON/天井/状態: https://slotmethod.jp/archives/18425/
