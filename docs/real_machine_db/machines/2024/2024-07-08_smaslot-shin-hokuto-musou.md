# スマスロ真・北斗無双

recordNo: 1657
machineName: スマスロ真・北斗無双
aliases: L真・北斗無双 / 真・北斗無双 スマスロ / スマスロ北斗無双 / Lスマスロ真北斗無双FS
manufacturer: ロデオ製造 / サミーブランド
formalModel: Lスマスロ真北斗無双FS
inspectionCode: 3S1512
releaseDate: 2024-07-08
generation: 6.5号機 / スマスロ
systemType: AT / 疑似ボーナス+ST
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseDateEvidence
- HAZUSE、パチ&スロ必勝本、K-Naviが2024-07-08導入で一致。
- 遊技通信・Amusement Japanの発表時記事は2024年7月導入予定としている。
confidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modelEvidence
- HAZUSEで型式 `L スマスロ真北斗無双 FS`、検定番号 `3S1512`、ロデオ製造、導入開始日2024-07-08を確認。
- 2024-03-18広島県公安委員会の検定通過記事でも `Lスマスロ真北斗無双 FS（ロデオ）` を確認。
confidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.9%
- setting2: 98.9%
- setting3: 101.8%
- setting4: 106.6%
- setting5: 110.5%
- setting6: 114.9%
initialHitBySetting:
- bonusInitial:
  - setting1: 1/381.1
  - setting2: 1/379.1
  - setting3: 1/361.6
  - setting4: 1/349.3
  - setting5: 1/338.6
  - setting6: 1/320.5
baseGamesPer50: 約31.0G/50枚（設定1）
netIncrease:
- 疑似ボーナス: 約5.0枚/G
basicPayout:
- 幻闘BONUS: 約100枚
- 真・北斗無双BONUS: 約300枚
- 七星チャージ: 50〜500枚
- 幻闘RUSH: 30G / 継続期待度約55%
- 真・幻闘RUSH: 40Gまたは50G / 継続期待度約77%
- 極・幻闘RUSH: 77G / 継続期待度約96%
confidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時は宿命（カルマ）を蓄積し、規定宿命到達でボーナス初当たりを目指す。
- 内部モードはA / B / C / D / 天国 / 超天国。
- モード別最大天井はA 1536宿命、B 1408宿命、C 1024宿命、D 640宿命、天国/超天国 256宿命（各+α）。
- 1Gあたり平均約2宿命として、A天井1536宿命は平均約768G、C天井1024宿命は平均約512Gに相当する。
- 初当たりボーナス後は必ずSTへ突入する。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_GAKKUN_UNVERIFIED
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 有利区間RESET。
- 天井までの宿命を再抽選。
- 内部モード再抽選、モードC以上濃厚。
- 内部状態再抽選。
- 無双目高確率RESET。
- 伝承奥義カウンタ / 北斗無双カウンタ / 幻闘PTメーターの表示RESET。
- ユリアポイントを再抽選し、初期ポイント抽選を行う。
- 有利区間移行時に宿命数・伝承奥義カウンタ・北斗無双カウンタがランダム加算される場合がある。
- 設定変更後の数ゲーム間のみ、成立すればユリアボーナス直撃となる「激アツ目」が出現する可能性がある。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き時は設定変更による有利区間RESETを行わない。
- なな徹の朝一比較では、伝承奥義カウンタ・北斗無双カウンタ等は据え置きで内部引継ぎ。
- 天井宿命・モード・状態の据え置き契約は電源OFF→ON比較資料と整合してCARRY_OVER扱い。
confidence: ANALYSIS_HIGH / DIRECT_COMPARISON

### powerCycleBehavior
- 純電源OFF→ONでは天井までの宿命CARRY_OVER。
- モードCARRY_OVER。
- 内部状態CARRY_OVER。
- 無双目高確率CARRY_OVER。
- ユリアポイントCARRY_OVER。
- 伝承奥義カウンタ / 北斗無双カウンタ / 幻闘PTメーターは表示上RESETされるが、内部的にはCARRY_OVER。
- 電源OFF→ON時の開始ステージは必勝本では「現在調査中」。
confidence: ANALYSIS_HIGH / DIRECT_COMPARISON

### gameCounterReset
- 設定変更: RESET / 再抽選。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- 設定変更後は内部宿命や各種カウンタがランダム加算される場合があるため、表示のズレのみで変更/据え置きを確定できない。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
- 通常時最大: 1536宿命+α（モードA、平均約768G）。
- 設定変更時: モードC以上濃厚のため最大1024宿命+α（平均約512G）へ短縮。
- モードDなら最大640宿命+α、天国/超天国なら最大256宿命+α。
- 設定変更時のC/D/天国/超天国の個別振り分け率は、表記揺れ・型式・メーカー・シリーズ名で再探索したが固定公開値を確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_SHORTENED_CEILING / UNVERIFIED_FOR_MODE_DISTRIBUTION

### modeAfterReset
- 設定変更: 再抽選、モードC以上濃厚。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- 有利区間移行時の一部でブルーセブンモード移行抽選を行う。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### stateAfterReset
- 設定変更: 再抽選。
- 据え置き / 純電源OFF→ON: CARRY_OVER。
- 無双目高確率も設定変更でRESET、電源OFF→ONでCARRY_OVER。
confidence: ANALYSIS_HIGH / DIRECT_COMPARISON

### advantageousSectionReset
- 設定変更時: RESET。
- 据え置き / 純電源OFF→ON: CARRY_OVERとして扱う。
- なな徹は有利区間リセットタイミングに設定変更時を明記。
- 設定変更以外の有利区間リセット（エンディング終了時 / 究極無双契機スペシャルムービー終了後）は極・幻闘RUSHへ突入するが、設定変更時はこの恩恵の対象外。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetBenefits
- 最大天井が1536宿命+αから1024宿命+αへ短縮。
- モードC以上濃厚。
- 設定変更後の数ゲーム間のみ「激アツ目」成立の可能性があり、成立時はユリアボーナス直撃。
- ユリアポイント初期値を再抽選。
- 有利区間移行時のブルーセブンモード移行抽選を受けられる。
- ブルーセブンモードは滞在中、ST中のボーナスが全て真・北斗無双BONUSとなり、設定1でも機械割100%超とされる。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetPenalties
- 設定変更により前日の天井宿命・モード・状態・ユリアポイント・無双目高確等の蓄積を失う。
- 前日が天国系・高ユリアポイント等の有利状態だった場合は据え置きより不利になり得る。
- 固定的なリセット損失率・期待値をメーカー/高信頼資料で固定できる値は確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_RESET_CONTRACT / UNVERIFIED_FOR_FIXED_PENALTY_VALUE

### resetDetection
- なな徹はリセット判別を「現在調査中」としている。
- 設定変更後は宿命数・伝承奥義カウンタ・北斗無双カウンタがランダム加算される場合があり、カウンタのズレだけでは据え置き確定にならない。
- 必勝本では設定変更時の開始ステージは実戦上「北斗神拳ステージ」、電源OFF→ON時は調査中。
- 朝一に1024宿命を超えて初当たりしない場合は設定変更契約と整合しないため据え置き推測材料になるが、表示/内部加算差を考慮し単独確定判別とはしない。
- 本機固有のリールガックン条件/発生率は `スマスロ真・北斗無双 / Lスマスロ真北斗無双FS / ロデオ / サミー / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン` を組み合わせ、業界・主要解析・旧DB系を再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_COUNTER_AND_STAGE_INFORMATION / UNVERIFIED_FOR_GAKKUN

### numericResetData
- 設定変更時最大天井: 1024宿命+α（平均約512G）
- 通常最大天井: 1536宿命+α（平均約768G）
- モードD最大天井: 640宿命+α（平均約320G）
- 天国 / 超天国最大天井: 256宿命+α（平均約128G）
- 有利区間移行時 / ST終了時のブルーセブンモード移行率:
  - setting1: 0.7%
  - setting2: 0.7%
  - setting3: 0.8%
  - setting4: 1.0%
  - setting5: 1.1%
  - setting6: 1.2%
- 有利区間移行時のレア小役によるブルーセブンモード追加移行率（全設定共通）:
  - 無双目 / チャンスベル: 10.2%
  - チェリー / スイカ: 20.3%
  - チャンス目: 33.6%
- 設定変更時のC/D/天国/超天国個別モード振り分け率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

## conflicts
- ユリアボーナス通常時直撃確率について、なな徹は設定5を1/5048.0、P-WORLD掲載値は1/5084.0とする差がある。これは性能コア必須項目ではなく、リセット専用値でもないためcanonical数値には採用せず `CONFLICT_5048_VS_5084` として保持。
- 型式表記はHAZUSE `L スマスロ真北斗無双 FS`、業界検定記事 `Lスマスロ真北斗無双 FS` で空白差のみ。型式同一と判断。

## missingFields
- 設定変更時のC/D/天国/超天国個別モード振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 本機固有リールガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH
- 純電断時の開始ステージ確定契約: UNVERIFIED / SOURCE_STATES_CURRENTLY_INVESTIGATING
- 固定的なリセット損失率/期待値: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

## sources
取得日: 2026-09-14

### industry / model / release
- HAZUSE: https://hazuse.com/machine/pachislot/3S1512/
- P-WORLD / グリーンべると 検定通過記事: https://news.p-world.co.jp/articles/27224/greenbelt
- P-WORLD / 遊技通信 発表記事: https://news.p-world.co.jp/articles/27538/yugitsushin
- Amusement Japan: https://amusement-japan.co.jp/article/detail/10004284/

### core
- パチ&スロ必勝本 基本スペック: https://p.hisshobon.jp/machine/4312/1/103421
- パチ&スロ必勝本 基本スペック別URL: https://p.hisshobon.jp/vpage/2623/2
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/214/kh01.php
- K-Navi: https://p-kn.com/slot/4145/
- P-WORLD: https://www.p-world.co.jp/machine/database/10044

### reset / morning
- パチ&スロ必勝本 天井&設定変更: https://p.hisshobon.jp/machine/4312/1/102341
- パチ&スロ必勝本 天井&設定変更（新URL）: https://hisshobon.com/machineinfo/83769/
- なな徹 朝一・設定変更: https://nana-press.com/kaiseki/machine/770/22515/
- なな徹 天井: https://nana-press.com/kaiseki/machine/770/22513/
- なな徹 有利区間: https://nana-press.com/kaiseki/machine/770/22516/
- なな徹 ブルーセブンモード: https://nana-press.com/kaiseki/machine/770/23105/
- HAZUSE 設定推測: https://hazuse.com/machine/pachislot/3S1512/genre/208/
- HAZUSE AT/ART: https://hazuse.com/machine/pachislot/3S1512/genre/209/
- 1geki 天井・リセット: https://1geki.jp/slot/l_sin_hokutomuso/3/
