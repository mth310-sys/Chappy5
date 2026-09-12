# S笑ゥせぇるすまん4

recordNo: 1526
machineName: S笑ゥせぇるすまん4
manufacturer: 三洋物産
formalModel: S笑ゥせぇるすまん4KH
inspectionCode: 2S0476
releaseDate: 2022-10-03
generation: 6.5号機
systemType: AT / 擬似ボーナス / JAC搭載BIG

## payoutRateBySetting
- 設定L: 88.7%
- 設定1: 97.2%
- 設定2: 99.2%
- 設定4: 103.1%
- 設定5: 106.1%
- 設定6: 109.0%
- 設定Lは待機/デモ状態で下パネル消灯。

P-WORLD、K-Navi、当時販社資料で一致。HAZUSEは設定L機械割を調査中表記のため、88.7%は前者をcanonicalとする。
信頼度: INDUSTRY / ANALYSIS_HIGH

## initialHitBySetting
### ボーナス初当り
- 設定1: 1/287.6
- 設定2: 1/268.7
- 設定4: 1/237.2
- 設定5: 1/217.7
- 設定6: 1/195.1

### ボーナス出現率
- 設定1: 1/212.9
- 設定2: 1/198.5
- 設定4: 1/175.2
- 設定5: 1/160.1
- 設定6: 1/144.0

### CZ「審判ノ刻」出現率
- 設定1: 1/209.8
- 設定2: 1/198.1
- 設定4: 1/168.8
- 設定5: 1/159.1
- 設定6: 1/147.6

信頼度: ANALYSIS_HIGH

## baseGamesPer50
- 約35.1G/50枚（資料によって約35G表記）。

信頼度: ANALYSIS_HIGH

## netIncrease
- BIG小役ゲーム: 約1.1枚/G。
- JACゲーム: 約2.8枚/G。
- REG: 約2.8枚/G。

信頼度: ANALYSIS_HIGH

## basicPayout
- BIG: 30G+α。平均獲得約409枚。
- BIG中JAC IN: 3回保障、平均JAC IN回数4.7回。
- REG: 20G、純増約2.8枚/G（単純換算目安約56枚相当だが、DBでは公開されたG数/純増を正本とし推定獲得枚数はcanonical化しない）。
- BIG終了後は4Gの「欲望輪廻ZONE」へ移行し、ボーナス期待度約50%。
- 上位「欲望輪廻ZONE激」はBIG平均8.5回、突入時期待枚数約3500枚。

信頼度: OFFICIAL / ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時はレア役・規定G数からCZ「審判ノ刻」またはボーナス直撃を目指す。
- CZ「審判ノ刻」: 15G+α、成功期待度40%over。
- 通常天井: 通常時555G+前兆、解析表記では最大580G前後でボーナス当選。
- 119モード: 天井119G / 199G / 209G / 219G。約50%で119Gが選択。設定1の119G以内ボーナス期待度約72%。
- 119モードは同一有利区間内でボーナス3回当選まで継続保証。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESET_CORE_WITH_POWER_CYCLE_PARTIAL
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更時は有利区間RESET、天井RESET、内部状態RESET。
- 設定変更後は内部状態が高確スタート。
- 通常モードはモードCへ100%移行。
- モードCは293G到達時にCZ「審判ノ刻」当選100%、かつ当該CZは成功確定のため、293G到達時は実質的にボーナスへ接続する。

### carryOverBehavior
- 据え置き時は有利区間・天井・内部状態を引き継ぐ。
- 通常モード/119モード等も設定変更による再初期化は行われず、前日状態の継続側として扱う。

### powerCycleBehavior
- 純電源OFF→ONのみの場合について、天井・通常モード・内部状態・有利区間を個別に直接規定した本機固有の高信頼資料は `UNVERIFIED_AFTER_RESEARCH`。
- 「電源オンオフ」を含む検索語で1geki、なな徹、HAZUSE、当時解析、回顧資料まで再探索したが、設定変更/据え置きとの比較表に純電断列を確認できなかったため一般論で補完しない。

### gameCounterReset
- 設定変更: 通常時天井ゲーム数RESET。
- 据え置き: 天井ゲーム数CARRY_OVER。
- 純電源OFF→ON: `UNVERIFIED_AFTER_RESEARCH`。

### ceilingAfterReset
- 通常天井は555G+前兆（最大580G前後）。
- 設定変更専用の通常天井G数そのものの短縮ではなく、モードC固定により293Gで成功確定CZへ到達するため、朝一は実質293G+前兆以内のボーナス接続が期待できる。
- 119モードの119/199/209/219G天井は通常ゲーム性上の別モードで、設定変更専用短縮天井とは分離。

### modeAfterReset
- 設定変更後の通常モード: モードC 100%。
- モードC: 293G消化時CZ当選率100%、そのCZは成功確定。
- 119モードへの設定変更専用振り分けは `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### stateAfterReset
- 設定変更後: 高確スタート。
- 据え置き: 内部状態引継ぎ。
- 高確開始率の細分値は公開確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 純電源OFF→ON: `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- 設定変更: 有利区間RESET。
- 据え置き: 有利区間CARRY_OVER。
- 有利区間ランプは非搭載のため、ランプによる朝一変更判別は不可。
- 有利区間リセット時は「欲望輪廻ZONE」へ突入するが、有利区間引継ぎ時にも同ゾーンへ入る可能性があるため、突入だけではリセット判別不可。
- 純電源OFF→ONの機種固有直接契約は `UNVERIFIED_AFTER_RESEARCH`。

### resetBenefits
- 高確スタート。
- 通常モードC 100%スタート。
- 293G到達時に成功確定CZへ接続するため、通常状態より朝一ボーナス到達期待が大きく上昇。

### resetPenalties
- 設定変更専用の主要な不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 293GでCZ「審判ノ刻」に当選した場合は設定変更期待度UP。モードC以外でもレア役等からCZ当選があり得るため単独では確定判別ではない。
- 設定変更後は高確スタートのため、朝一の高確挙動は補助材料となる。
- 有利区間ランプ非搭載のためランプ判別不可。
- 本機固有のリールガックン条件/発生率は、機種名・型式・メーカー・シリーズ名と「設定変更/朝一/据え置き/ガックン」を組み替えて再探索後も `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- 設定変更後 通常モードC: 100%。
- モードC 293G到達時 CZ当選率: 100%。
- モードC 293G到達CZ: 成功確定。
- 設定変更後内部状態: 高確スタート（細分率未公表/未確認）。
- 設定変更専用119モード振り分け: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### publicMorningNumbers
- モードC移行率: 100%。
- 293G消化時CZ当選率: 100%。
- 293GのモードC CZ: 成功確定。
- 高確スタート率の数値化資料: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### resetBehavior 再探索メモ
- 取得/再探索日: 2026-09-13。
- `S笑ゥせぇるすまん4 / SLOT笑ゥせぇるすまん4 / 笑うセールスマン4 / S笑ゥせぇるすまん4KH / 2S0476 / 三洋物産 / SANYO` と `設定変更 / リセット / 朝一 / 朝イチ / 据え置き / 電源OFF ON / 電源オンオフ / 天井 / 天井短縮 / モード / モードC / 119モード / ガックン / 有利区間 / リセット判別` を組み替えて再探索。
- 三洋公式プレスリリース、P-WORLD/業界記事、東京都公安委員会検定記事、1geki、なな徹、HAZUSE、K-Navi、パチマガスロマガ、当時攻略記事を横断。
- 設定変更/据え置きの主要契約は複数解析で一致。純電断とガックンだけは直接資料を固定できず未確認扱い。

## conflicts
- 設定L機械割はP-WORLD/K-Navi/販社資料が88.7%を掲載。一方HAZUSEは「調査中」。数値の直接競合ではなく公開状況差のため、88.7%をcanonical、HAZUSEの未確認表記を注記として保持。
- 天井表記は「通常時555G+α」と「最大580G+α/前兆込み580G」が併存。前者を内部到達G、後者を告知/前兆込みの実戦上最大表記として定義分離し、平均化しない。

## missingFields
- 純電源OFF→ON時の天井/モード/内部状態/有利区間の本機固有直接契約
- 本機固有ガックン条件/発生率
- 設定変更後の高確開始率の細分数値
- 設定変更専用119モード振り分け

## sources
取得日: 2026-09-13

1. 三洋物産 / 三洋販売 — 公式プレスリリース
   - https://www.sanyobussan.co.jp/information/pdf/sanyo_press_release_20220801_02.pdf
   - 型式 `S笑ゥせぇるすまん4KH`、メーカー三洋物産、トップ導入日2022-10-03、BB平均409枚等を確認。
   - reliability: OFFICIAL
2. PiDEA X — 東京都公安委員会検定通過
   - https://www.pidea.jp/articles/1658720419
   - 型式 `S笑ゥせぇるすまん4KH`、検定番号2S0476、三洋物産を確認。
   - reliability: INDUSTRY
3. P-WORLD 機種DB
   - https://www.p-world.co.jp/machine/database/9697
   - 設定L含む出玉率、初当り、ボーナス出現率、天井、有利区間概要を確認。
   - reliability: INDUSTRY / ANALYSIS_HIGH
4. 1geki 機種概要
   - https://1geki.jp/slot/s_warau4/
   - 初当り、出玉率、BB平均409枚、119モード等を確認。
   - reliability: ANALYSIS_HIGH
5. 1geki 天井/有利区間
   - https://1geki.jp/slot/s_warau4/3/
   - 通常天井、119モード天井、有利区間ランプ非搭載を確認。
   - reliability: ANALYSIS_HIGH
6. 1geki 通常モード
   - https://1geki.jp/slot/s_warau4/45/
   - 設定変更後モードC 100%、293G CZ確定を確認。
   - reliability: ANALYSIS_HIGH
7. 1geki REG
   - https://1geki.jp/slot/s_warau4/81/
   - REG 20G、純増約2.8枚/Gを確認。
   - reliability: ANALYSIS_HIGH
8. なな徹 — 解析まとめ / 朝一
   - https://nana-press.com/kaiseki/machine/432/
   - https://nana-press.com/kaiseki/machine/432/11961/
   - 設定変更=有利区間/天井/内部状態RESET、据え置き=CARRY_OVER、高確スタート、モードC固定、リセット判別を確認。
   - reliability: ANALYSIS_HIGH
9. HAZUSE 機種DB
   - https://hazuse.com/machine/pachislot/2S0476/
   - 型式系DB、出玉率、設定L待機中下パネル消灯等を確認。
   - reliability: ANALYSIS_HIGH
10. K-Navi
   - https://p-kn.com/slot/3841/
   - 導入日、設定L 88.7%を含むスペックを照合。
   - reliability: ANALYSIS_HIGH
11. パチマガスロマガ — 119モード
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/39/tj04-2.php
   - 119/199/209/219G、119G約50%、3回継続保証を確認。
   - reliability: ANALYSIS_HIGH

coreStatus: COMPLETE_CORE
confidence: OFFICIAL / INDUSTRY / ANALYSIS_HIGH
