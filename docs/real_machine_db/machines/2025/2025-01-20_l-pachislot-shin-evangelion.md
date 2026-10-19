# Lパチスロ シン・エヴァンゲリオン

recordNo: 1703
machineName: Lパチスロ シン・エヴァンゲリオン
aliases: Lシン・エヴァンゲリオン / スマスロ シン・エヴァンゲリオン
manufacturer: ビスティ（製造） / フィールズ（販売）
formalModel: Lシン・エヴァンゲリオン
inspectionCode: 4S1192
releaseDate: 2025-01-20
generation: 6.5号機 / スマスロ / AT
systemType: 作戦ST + 擬似ボーナスループ / 上位AT
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseAndModelEvidence
- フィールズ発表を報じる遊技通信で型式 `Lシン・エヴァンゲリオン`、ビスティ製を確認。
- グリーンべるとで2025-01-20からホール導入開始を確認。
- 検定DB系資料で検定番号 `4S1192` を確認。
confidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 98.2%
- setting2: 99.2%
- setting3: 101.5%
- setting4: 105.4%
- setting5: 110.2%
- setting6: 114.9%
initialHitBySetting:
- setting1: 1/291.1
- setting2: 1/283.5
- setting3: 1/264.5
- setting4: 1/236.6
- setting5: 1/224.8
- setting6: 1/212.5
baseGamesPer50: 約33.1G/50枚
netIncrease:
- 作戦ST: 約0.1枚/G（ほぼ現状維持）
- 擬似ボーナス: 約5.0枚/G
- 上位AT「オップファータイプ殲滅作戦」: 約5.0枚/G
basicPayout:
- BIG: 約150枚+α
- SUPER BIG: 約300枚+α
- SPECIAL BONUS: 約150枚+α
- 裏CODE:999: 999枚獲得
confidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時ゲーム数天井: モードA 800G / B 550G / C 450G / 朝イチ650G。
- ボーナス間天井: 1200Gハマリ以降の次回初当たりでボーナス当選。
- 設定変更時は朝イチモードへ必ず移行。
- 朝イチモードでは150G以内の規定G数選択率35.2%（全設定共通）。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_DIRECT_TABLE_WITH_PUBLIC_MORNING_RATE
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 天井までのゲーム数をRESET。
- 通常最大800G+αのゲーム数天井は650G+αへ短縮。
- モードは朝イチモードへ移行。
- 内部状態は再抽選。
- ナビポイントはRESET。
- 有利区間はRESET。
- 液晶表示は初期状態へ戻る。
confidence: ANALYSIS_HIGH / DIRECT_MACHINE_SPECIFIC_TABLE

### carryOverBehavior
- 据え置きでは天井ゲーム数・内部モード・内部状態・ナビポイント・有利区間を引き継ぐ。
- 液晶表示はホール電源投入時に初期状態へ戻り得るため、表示のみでの据え置き判別は不可。
confidence: ANALYSIS_HIGH

### powerCycleBehavior
- 必勝本の設定変更/電源OFF→ON直接比較で、純電断では天井までのゲーム数・モード・状態・ナビポイントを引き継ぐ。
- 液晶表示は初期状態へ戻るが、内部値は引き継ぐ。
- ステージ復帰先は主要解析で調査中表記が残るため、確定値として固定しない。
confidence: ANALYSIS_HIGH_FOR_INTERNAL_CARRYOVER / UNVERIFIED_FOR_STAGE_RETURN

### gameCounterReset
- 設定変更: RESET。
- 据え置き / 電源OFF→ON: CARRY_OVER。
- 液晶表示は純電断でも初期化されるため、表示G数だけでの変更判別は不可。
confidence: ANALYSIS_HIGH

### ceilingAfterReset
normalCeiling: 最大800G+α（通常A）
resetCeiling: 650G+α（朝イチモード）
resetCeilingShortening: 最大150G
bonusGapCeiling: 1200Gハマリ以降の次回初当たりでボーナス
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 設定変更時は朝イチモードへ必ず移行。
- 朝イチモード天井は650G。
- 150G以内の規定G数選択率は35.2%（全設定共通）。
- 据え置き/純電断では内部モードを引き継ぐ。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### stateAfterReset
- 設定変更: 再抽選。
- 据え置き / 電源OFF→ON: 引き継ぎ。
- 朝一設定変更時の状態別具体振り分け率は、表記揺れ・型式・メーカー名と「状態/朝一/リセット/振り分け」を変えて再探索しても高信頼の固定公開値を確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_BEHAVIOR / UNVERIFIED_FOR_DISTRIBUTION

### advantageousSectionReset
- 設定変更: RESET。
- 据え置き / 電源OFF→ON: CARRY_OVER。
- エンディング終了後も有利区間をリセットし、「三機殲滅」へ移行する通常時ツラヌキ要素がある。ただし設定変更時の有利区間リセット後はこの恩恵の対象外と解析資料が明記。
confidence: ANALYSIS_HIGH

### resetBenefits
- ゲーム数天井が最大800G+α → 650G+αへ短縮。
- 朝イチモード専用の規定G数分布により、150G以内選択率35.2%（全設定共通）。
- 設定変更時のみ朝イチモードへ移行。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetPenalties
- 内部モード・状態・ナビポイント・天井進行は設定変更で再初期化されるため、据え置きで保持される有利な進行を失う可能性がある。
- 数値化された設定変更固有の不利率は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_CARRYOVER_LOSS / PUBLIC_VALUE_NOT_FOUND_FOR_RATE

### resetDetection
- 朝イチ650G+αを超えても作戦ST/ボーナスに当選しない場合は据え置き濃厚材料。
- 純電断でも液晶表示が初期状態へ戻るため、表示初期化だけでは設定変更判別不可。
- 本機固有ガックン条件・発生率は機種名/型式名/ビスティ/フィールズと「設定変更/リセット/朝一/据え置き/電源OFF ON/ガックン」を変えて再探索しても直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_CEILING_BASED_DETECTION / UNVERIFIED_FOR_GAKKUN

### numericResetData
normalCeiling: 最大800G+α
resetCeiling: 650G+α
morningModeWithin150GSelectionRate: 35.2%（全設定共通）
resetMode: 朝イチモード固定
resetStateDistribution: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
resetBenefitRate: 150G以内規定G選択率35.2%
gakkun: UNVERIFIED_AFTER_RESEARCH

### publicMorningNumbers
- 朝イチモード天井: 650G+α。
- 朝イチモードの150G以内規定G数選択率: 35.2%（全設定共通）。
- 通常モードA/B/C合算の150G以内選択率は設定1～6で23.4 / 23.9 / 27.2 / 30.3 / 32.0 / 33.4%。朝イチ35.2%との比較用に保持。

## conflicts
- 必勝本の更新時期により「状態」の設定変更側が「現在調査中」と「再抽選」の版差が確認される。後発機種別直接表および複数解析の一致をcanonical `再抽選` とし、旧版差を `CONFLICT_OLDER_PAGE_STATE_UNDER_RESEARCH` として保持。

## missingFields
- 朝イチ設定変更時の内部状態別振り分け率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 純電断時の確定ステージ復帰先: UNVERIFIED_AFTER_RESEARCH
- 本機固有ガックン条件・発生率: UNVERIFIED_AFTER_RESEARCH

## sources
retrievedAt: 2026-09-14
- INDUSTRY_RELEASE: https://news.p-world.co.jp/articles/30020/greenbelt
- INDUSTRY_MODEL: https://news.p-world.co.jp/articles/29945/yugitsushin
- INDUSTRY_ANNOUNCEMENT: https://news.p-world.co.jp/articles/29891/amusement
- ANALYSIS_MODEL_CODE: https://ativo.jp/2024/12/24/l%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD-%E3%82%B7%E3%83%B3%E3%83%BB%E3%82%A8%E3%83%B4%E3%82%A1%E3%83%B3%E3%82%B2%E3%83%AA%E3%82%AA%E3%83%B3/
- ANALYSIS_HIGH_CORE: https://hisshobon.com/machines/l-%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD-%E3%82%B7%E3%83%B3%E3%83%BB%E3%82%A8%E3%83%B4%E3%82%A1%E3%83%B3%E3%82%B2%E3%83%AA%E3%82%AA%E3%83%B3/
- ANALYSIS_HIGH_CORE_DIRECT: https://p.hisshobon.jp/vpage/2678/2
- ANALYSIS_HIGH_RESET_DIRECT: https://hisshobon.com/machineinfo/85915/
- ANALYSIS_HIGH_MODE: https://hisshobon.com/machineinfo/85897/
- ANALYSIS_HIGH_MORNING_RATE: https://nana-press.com/kaiseki/machine/893/26809/
- ANALYSIS_HIGH_MORNING_RATE_CROSSCHECK: https://1geki.jp/slot/l_shin_eva/3/
- ANALYSIS_HIGH_CEILING: https://pachimaga.com/free/article/20250117/056067.php
- ANALYSIS_HIGH_ADVANTAGEOUS_SECTION: https://nana-press.com/kaiseki/machine/893/26804/
