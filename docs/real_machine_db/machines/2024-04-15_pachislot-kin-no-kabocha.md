# パチスロ金のかぼちゃ

recordNo: 1643
machineName: パチスロ金のかぼちゃ
aliases: 金のかぼちゃ / S金のかぼちゃ / SキンノカボチャAA
manufacturer: バルテック
formalModel: SキンノカボチャAA
inspectionCode: 3S1654
releaseDate: 2024-04-15
generation: 6.5号機 / メダル機
systemType: AT / 擬似ボーナス+ST
settings: L / 1 / 2 / 3 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseDateEvidence
- 遊技日本が2024-03-18付の新機種記事で、バルテック製「パチスロ金のかぼちゃ」の導入開始を2024-04-15予定と明記。
- HAZUSE、一撃、パチマガスロマガ、パチセブン等も2024-04-15で一致。
confidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modelEvidence
- 遊技日本が型式名 `SキンノカボチャAA` を明記。
- HAZUSE機種DBが型式名 `SキンノカボチャAA`、検定番号 `3S1654`、メーカー バルテックを掲載。
confidence: INDUSTRY + ANALYSIS_HIGH

## corePerformance
payoutRateBySetting:
- setting1: 97.8%
- setting2: 99.0%
- setting3: 101.7%
- setting5: 104.5%
- setting6: 107.2%
- settingL: 公開機械割未確認 / 下パネル常時点滅
initialHitBySetting:
- setting1: ボーナス初当り 1/148 / ST初当り 1/399
- setting2: ボーナス初当り 1/145 / ST初当り 1/380
- setting3: ボーナス初当り 1/139 / ST初当り 1/337
- setting5: ボーナス初当り 1/133 / ST初当り 1/299
- setting6: ボーナス初当り 1/124 / ST初当り 1/270
baseGamesPer50: 約34.0G/50枚
netIncrease:
- 擬似ボーナス: 約3.3枚/G
- ST「収穫祭」: 出玉維持程度
basicPayout:
- ゴールデンBIG: 約209枚 + ST
- BIG: 約105枚 + ST
- REG: 約40枚 / ST抽選
- ST「収穫祭」: 1セット10G / ST中ボーナス合算約1/15 / ストック込みループ率約80%
confidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時は完全告知型の擬似ボーナス初当りを毎ゲーム抽選し、ボーナス後のST「収穫祭」で連続性を持たせるAT機。
- BIG以上はST突入濃厚。REGは当選時と消化中にST抽選。
- 通常時ボーナス間500G消化でゲーム数天井到達、ボーナス当選。
- REGが6回連続でST非当選となった後、7回目のボーナスでST突入濃厚。
- ゲーム数天井到達時のボーナス振り分けはREG 96.88% / BIG 1.56% / ゴールデンBIG 1.56%。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- ボーナス間天井G数をRESET。
- REGスルー回数をRESET。
- 朝一初回REG時のST突入期待度が通常の一部ケースより優遇される解析情報あり。
- 独立した朝一モード、開始ステージ、内部高確状態の再抽選契約は機種固有資料を横断しても固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_CEILING_AND_REG_COUNT / ANALYSIS_SINGLE_FOR_FIRST_REG_BENEFIT / UNVERIFIED_FOR_OTHER_INTERNAL_STATE

### carryOverBehavior
- 据え置きは、設定変更時にRESETされるボーナス間天井G数・REGスルー回数を引き継ぐものとして扱う。
- 内部状態・開始ステージ・その他の隠し状態は本機固有の直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_CEILING_AND_REG_COUNT / UNVERIFIED_FOR_OTHER_STATE

### powerCycleBehavior
- 電源OFF→ONのみの場合、ボーナス間天井G数をCARRY_OVER。
- REGスルー回数をCARRY_OVER。
- 内部状態、液晶/ランプ表示、開始状態の復帰契約は、機種名/型式/メーカー名と「電源OFF ON」「電断」「朝一」「据え置き」を組み替えて再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_CEILING_AND_REG_COUNT / UNVERIFIED_FOR_OTHER_STATE

### gameCounterReset
- 設定変更: ボーナス間500G天井進行RESET。
- 据え置き: CARRY_OVER。
- 電源OFF→ON: CARRY_OVER。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
- 通常ゲーム数天井は500G消化でボーナス当選。
- 設定変更後も短縮天井の公開値は確認できず、通常500G天井を0Gから再スタートする契約として記録。
- REGスルー天井も設定変更で回数RESET。6回連続ST非当選後の次回ボーナスでST突入濃厚という通常契約自体は維持。
confidence: ANALYSIS_HIGH

### modeAfterReset
- 通常A/B等の離散的な朝一専用モードは主要解析で確認できず `NO_DISCRETE_MORNING_MODE_CONFIRMED_AFTER_RESEARCH`。
- 設定変更後の差は、確認できた範囲では主に天井/REGスルー回数のRESETと初回REG時のST期待度優遇。
confidence: UNVERIFIED_FOR_DISCRETE_MODE / ANALYSIS_SINGLE_FOR_FIRST_REG_BENEFIT

### stateAfterReset
- 設定変更/据え置き/純電断ごとの内部高確・低確等の独立状態契約は、HAZUSE、一撃、必勝本、パチセブン、パチマガスロマガ、後年リセット整理を横断しても固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: UNVERIFIED

### advantageousSectionReset
- 6.5号機AT機であり設定変更時の有利区間再初期化が制度上想定されるが、本機固有資料で「有利区間RESET/CARRY_OVER」を設定変更・据え置き・純電断それぞれ直接明記した資料を今回固定できなかったため、推測補完せず `UNVERIFIED_AFTER_RESEARCH`。
- 一撃は天井到達ゲーム数について「有利区間移行タイミングや変則押し等でズレる可能性あり」と明記するが、これは設定変更時の有利区間契約そのものを直接示すものではない。
confidence: UNVERIFIED_FOR_MACHINE_SPECIFIC_CONTRACT

### resetBenefits
- 設定変更後はREGスルー履歴がRESETされる一方、初回REG当選時のST突入期待度が優遇される解析情報あり。
- 後年のリセット恩恵整理では「REG1回目はST突入期待度が約33%」とされる。
- パチセブンも設定変更時の初回REGでST突入率が優遇される旨を掲載するが具体値は示していない。
confidence: ANALYSIS_SINGLE_FOR_APPROX_33_PERCENT + SECONDARY_CORROBORATION_FOR_DIRECTION

### resetPenalties
- REGスルー回数が設定変更でRESETされるため、前日のREGスルー天井進行は失われる。これは据え置きと比較した朝一の明確な不利要素。
- その他の定量的不利要素は再探索後も確認できず `NONE_OTHER_CONFIRMED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH

### resetDetection
- ボーナス間天井G数とREGスルー回数は設定変更時RESET、純電断/据え置き時CARRY_OVERのため、前日履歴と当日挙動を組み合わせれば変更推測材料になる。
- 朝一で前日のREGスルー回数が継続しているとみられるST当選挙動は据え置き推測材料になり得るが、抽選のため単独確定判別にはしない。
- 本機固有のリールガックン条件/発生率、開始ステージ差、有利区間ランプによる確定判別は、`金のかぼちゃ` / `SキンノカボチャAA` / `バルテック` と「ガックン」「設定変更」「据え置き」「朝一」「有利区間ランプ」を組み替えて再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_HISTORY_CLUE / UNVERIFIED_FOR_GAKKUN_LAMP_STAGE

### numericResetData
- 設定変更時ボーナス間天井: 500G天井を0Gから再スタート / 短縮値なし確認
- 設定変更時REGスルー回数: RESET
- 電源OFF→ON時ボーナス間天井: CARRY_OVER
- 電源OFF→ON時REGスルー回数: CARRY_OVER
- 設定変更後初回REG時ST突入期待度: 約33%（後年単一整理資料。パチセブンは「優遇」と方向のみ corroborate）
- ガックン発生率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 朝一専用モード振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

### publicMorningNumbers
- 朝一設定変更時の短縮天井数値は確認されず、通常500G天井をRESETして再スタート。
- REGスルー回数もRESET。
- 初回REG時ST突入期待度は約33%とする後年整理資料あり。ただし高信頼複数ソースによる同一具体値照合は取れなかったため、数値信頼度はANALYSIS_SINGLE。

## conflicts
- performanceConflict: NONE_CONFIRMED
- resetConflict: NONE_CONFIRMED
- 初期攻略ページには朝一リセット恩恵を「調査中」とする資料がある一方、後年更新された一撃/必勝本では天井G数・REGスルー回数のRESET/CARRY_OVERが明文化されている。これは解析更新差として扱い、CONFLICTにはしない。
- 初回REG時の設定変更恩恵は「優遇」とする複数資料方向一致はあるが、約33%という具体値は後年単一整理資料のため、複数ソース一致値には格上げしない。

## missingFields
- 設定Lの機械割
- 設定変更/据え置き/電源OFF→ON別の内部高確状態・開始状態
- 本機固有の有利区間RESET/CARRY_OVER直接明記
- 本機固有ガックン条件/発生率
- 有利区間ランプ/開始ステージによる確定判別

## sources
取得日: 2026-09-14

### industry
- 遊技日本 / 新機種発表・型式・スペック・導入日: https://yugi-nippon.com/pachinko-new-machine/post-63629/

### machine DB / analysis
- HAZUSE機種DB: https://hazuse.com/hd/3s1654/
- HAZUSE基本スペック: https://hazuse.com/machine/pachislot/3S1654/
- P-WORLD機種DB: https://www.p-world.co.jp/machine/database/10004
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/baltech_slot/66/kh01.php
- 一撃 機種概要: https://1geki.jp/slot/s_kinnokabocha/39/
- 一撃 天井/設定変更: https://1geki.jp/slot/s_kinnokabocha/3/
- 一撃 ベース: https://1geki.jp/slot/s_kinnokabocha/4/
- 必勝本 天井&設定変更: https://hisshobon.com/machineinfo/83233/
- 必勝本 ボーナス解説: https://hisshobon.com/machineinfo/83237/
- 必勝本 ベース/小役: https://hisshobon.com/machineinfo/83239/
- パチセブン 天井/朝一: https://pachiseven.jp/machines/6923/cutout/3
- パチセブン スペック: https://pachiseven.jp/machines/6923/cutout/2
- パチビー 機種/天井/設定差: https://www.pachibee.jp/machines/kouryaku/224030000
- ちょんぼりすた: https://chonborista.com/slot/baltec/207184/
- 後年リセット恩恵整理（具体値は単一二次資料扱い）: https://note.com/pokoblog/n/n396ef7ee9b84

## qualityNotes
- 性能コアの設定別ボーナス/ST初当り、機械割、純増、ベース、基本獲得枚数は業界記事+複数解析で整合。
- リセットの天井G数/REGスルー回数は必勝本と一撃で一致。
- 初回REG時ST優遇はパチセブンと後年整理で方向一致。ただし約33%の具体値は単一整理資料なのでANALYSIS_SINGLE。
- 有利区間、内部状態、ガックンは一般論から補完せずUNVERIFIED_AFTER_RESEARCHとした。
