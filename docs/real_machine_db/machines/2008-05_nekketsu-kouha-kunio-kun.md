# 熱血硬派くにおくん

- machineName: 熱血硬派くにおくん
- manufacturer: タイヨーエレック
- modelName: 熱血硬派くにおくん
- releaseDate: 2008-05
- releaseDateDefinition: P-WORLDおよび当時業界史で2008年5月導入/発売を確認。直前LATEST_HANDOFFでは2008-05-19同日群の未処理機として引き継がれているが、今回の再探索では5月19日を直接明記する独立資料を確定できなかったため日精度を推測せず月精度で保存する。
- releaseDateConfidence: MULTI_SOURCE_MONTH_EXACT_DAY_UNVERIFIED
- generation: 5号機初期
- systemType: ボーナス+ループ型ART（熱血チャンス）/天井ART
- coreStatus: PARTIAL_WITH_PAYOUT_CONFLICT
- resetBehaviorQA: PARTIAL_WITH_RESET_CEILING_CONFLICT
- acquiredAt: 2026-09-01

## 性能コア

### payoutRateBySetting

設定構成は `1 / 2 / 5 / 6`。

- パチマガスロマガ シミュレート値: `98.00 / 101.24 / 104.78 / 108.32%`
- 5号機まとめwiki: `97 / 101 / 107 / 111%`
- 設定5・6は単純な丸めでは説明できない差があるため平均せず `CONFLICT_PAYOUT_RATE` として双方を保持する。

### initialHitBySetting

パチマガスロマガと5号機まとめwikiで一致するボーナス確率系列。

- KUNIO BONUS: `1/885.62 / 1/862.32 / 1/840.21 / 1/819.20`
- RIKI BONUS: `1/885.62 / 1/862.32 / 1/840.21 / 1/819.20`
- KAZUMI BONUS: 全設定 `1/6553.60`
- ボーナス合成: `1/414.78 / 1/404.54 / 1/394.80 / 1/385.51`

### baseGamesPer50

- `UNVERIFIED_AFTER_RESEARCH`
- `熱血硬派くにおくん / タイヨーエレック / 型式名` と `1000円あたり / 50枚 / コイン持ち / ベース / 小役確率` を組み替え、当時解析・旧DB・回顧資料を再探索したが、比較用に直接採用できる50枚ベースを確定できなかった。

### netIncrease

- ART「熱血チャンス」: 約 `+1.0枚/G`
- 20Gワンセットのループ型ART。
- 最大継続率約90%。

### basicPayout

パチマガスロマガ基本システムより。

- KUNIO BONUS: 210枚超払い出しで終了、純増約180枚
- RIKI BONUS: 210枚超払い出しで終了、純増約180枚
- KAZUMI BONUS: 466枚超払い出しで終了、純増約410枚

### modeSpecificMinimumData

- ART「熱血チャンス」は20Gワンセット、約+1枚/G、最大90%ループ。
- 通常ゲーム数に基づく天井ART/AR機能あり。
- 当時業界史では通常天井を `1920GでAR発動` と記録。
- 5号機まとめwikiの後年整理ではボーナス種別後・設定変更後・天井NC後に天井G数テーブルが存在し、設定変更後の天井振り分けまで掲載されている。
- 実機完全再現用の通常時モード移行率やART継続内部抽選は本DB対象外のため収集しない。

## resetBehavior

- settingChangeBehavior: `DEDICATED_RESET_CEILING_CONFIRMED_WITH_CONFLICT`
- carryOverBehavior: `UNVERIFIED_AFTER_RESEARCH`
- powerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH`
- gameCounterReset: `RESET_SPECIFIC_CEILING_TABLE_CONFIRMED_COUNTER_HANDLING_NOT_DIRECTLY_STATED`
- ceilingAfterReset: `CONFLICT_RESET_CEILING_256G_FIXED_VS_DISTRIBUTION_TO_1920G`
- modeAfterReset: `UNVERIFIED_AFTER_RESEARCH`
- stateAfterReset: `RESET_SPECIFIC_CEILING_STATE_CONFIRMED_OTHER_STATE_HANDLING_UNVERIFIED`
- advantageousSectionReset: `NOT_APPLICABLE`
- resetBenefits: `SETTING_CHANGE_DEDICATED_EARLY_CEILING_EXISTS`
- resetPenalties: `NONE_CONFIRMED`
- resetDetection: `UNVERIFIED_AFTER_RESEARCH`
- numericResetData: `CONTEMPORARY_HISTORY_256G_AR; RETROSPECTIVE_TABLE_RESET_CEILING_DISTRIBUTION_128_TO_1920G`

### resetBehavior調査メモ

- `熱血硬派くにおくん / タイヨーエレック / くにお / 熱血チャンス` と `設定変更 / リセット / 朝一 / 朝イチ / 据え置き / 電源OFF ON / 電断 / 天井 / 天井AR / 天井ART / モード / ガックン / 初期出目` を組み替えて探索。
- 2008年当時の業界初議論・更新記録には「初設定変更後専用の天井」として `設定変更後256G消化でAR発動` / `256GでAR発動` が明記される。
- 一方、2008-07-14更新の5号機まとめwikiには、設定変更後の天井G数振り分けとして `～128G 15.63% / ～256G 21.88% / ～384G 12.50% / ～512G 9.38% / ～640G 7.81% / ～768G 6.25% / ～896G 4.69% / ～1024G 3.91% / ～1152G 3.13% / ～1280G 3.13% / ～1408G 2.34% / ～1536G 2.34% / ～1664G 2.34% / ～1792G 2.34% / ～1920G 2.34%` が掲載される。
- 上記は固定256G説と両立しないため平均・統合せず `CONFLICT_RESET_CEILING_256G_FIXED_VS_DISTRIBUTION_TO_1920G` として保持する。
- 同wikiには通常側の天井として、KUNIO BONUS後 `920G 100%`、RIKI BONUS後は最大1920G、KAZUMI BONUS後も最大1920Gの天井テーブルが掲載されるが、ホール経営用のresetBehaviorでは設定変更後テーブルだけを主要朝一数値として保持する。
- 設定変更後の専用天井があること自体は複数の当時/後年資料で確認できるため朝一恩恵ありと判定する。
- 据え置き時に前日ゲーム数をどう引き継ぐか、電源OFF→ON単独時の天井カウンタ/ART状態、本機固有のガックン・初期出目等は十分な再探索後も直接資料を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- P-WORLD掲示板には「設定変更後はリールがっくんしますか？」という質問が残るが回答がなく、仕様根拠には採用しない。
- 有利区間は5号機初期のため `NOT_APPLICABLE`。

## 導入時期

- P-WORLD: 導入開始 `2008年05月`。
- パチスロ業界初まとめ: `2008/5発売`。
- 直前LATEST_HANDOFFでは2008-05-19同日群の次未処理として指定されていたが、今回独立して5/19を裏付ける資料を確定できなかったため `releaseDate` は2008-05に留める。

## sources

取得日: 2026-09-01

1. パチマガスロマガ「熱血硬派くにおくん・ボーナス抽選確率」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyoelec_slot/04/h.php
   - KUNIO/RIKI/KAZUMI確率、合成、シミュレートPAYOUT
   - confidence: ANALYSIS_HIGH
2. パチマガスロマガ「熱血硬派くにおくん・基本システム」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyoelec_slot/04/a.php
   - 20G ART、約+1枚/G、最大90%、各ボーナス規定払い出し/純増
   - confidence: ANALYSIS_HIGH
3. 5号機まとめwiki「熱血硬派くにおくん」
   - https://w.atwiki.jp/5gouki/pages/87.html
   - ボーナス確率、機械割、天井詳細、設定変更後天井G数振り分け
   - confidence: CONTEMPORARY_COMMUNITY_ANALYSIS
4. P-WORLD「熱血硬派くにおくん」
   - https://www.p-world.co.jp/machine/database/5170
   - メーカー、型式、2008年05月導入、ボーナス払い出し条件
   - confidence: INDUSTRY_DB
5. パチスロ業界初まとめ 更新情報5
   - https://slothistory.com/kousin_kako05.html
   - 2008/5発売、通常1920G天井AR、設定変更後専用天井256G記録
   - confidence: OLD_INDUSTRY_HISTORY
6. パチスロ業界初まとめ 議論11
   - https://www.slothistory.com/kokolog-11.html
   - 2008年当時の議論で「設定変更後256G消化」の専用天井を記録
   - confidence: CONTEMPORARY_HISTORY_DISCUSSION
7. 5ch旧ログ「初～ 業界初を語るスレ（その12）」
   - https://kako.5ch.io/test/read.cgi/slot/1220309558/l-
   - 後続整理でも「初設定変更後専用の天井」として本機を確認
   - confidence: RETROSPECTIVE_DISCUSSION

## missingFields

- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- 2008年5月の具体導入日: UNVERIFIED_AFTER_RESEARCH
- 据え置き時の天井ゲーム数/ART状態引継ぎ: UNVERIFIED_AFTER_RESEARCH
- 電源OFF→ONのみでの天井/ART状態: UNVERIFIED_AFTER_RESEARCH
- resetDetection（ガックン/初期出目等）: UNVERIFIED_AFTER_RESEARCH

## conflicts

- CONFLICT_PAYOUT_RATE
- CONFLICT_RESET_CEILING_256G_FIXED_VS_DISTRIBUTION_TO_1920G
