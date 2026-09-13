# パチスロ傷物語 -始マリノ刻-

recordNo: 1587
machineName: パチスロ傷物語 -始マリノ刻-
manufacturer: ロデオ製造 / サミー
formalModel: S 傷物語 FS
inspectionCode: 230305
releaseDate: 2023-09-04
generation: 6.5号機 / メダル機
systemType: AT / 差枚数管理型直AT
settings: 1 / 2 / 3 / 4 / 5 / 6

## payoutRateBySetting
- 設定1: 97.8%
- 設定2: 98.8%
- 設定3: 101.1%
- 設定4: 105.1%
- 設定5: 108.5%
- 設定6: 111.3%
信頼度: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## initialHitBySetting
### AT「鬼血闘（ヴァンピーバトル）」初当たり
- 設定1: 1/265.3
- 設定2: 1/258.1
- 設定3: 1/241.9
- 設定4: 1/219.1
- 設定5: 1/202.5
- 設定6: 1/190.6
信頼度: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## baseGamesPer50
- 約32.7G/50枚（設定1）
信頼度: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## netIncrease
- AT「鬼血闘（ヴァンピーバトル）」: 約2.8枚/G
信頼度: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## basicPayout
- AT「鬼血闘（ヴァンピーバトル）」: 初期差枚数100枚、差枚数管理型。
- BONUS: 20G or 30G、純増約2.8枚/G。
- 上乗せ特化ゾーン「解鬼ノ刻」および「降臨ノ儀」を搭載。
信頼度: INDUSTRY / ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時はレア役 / 怪異図柄停止 / 規定ゲーム数からCZ「クライマックスバトル」を抽選し、CZ成功または天井到達等でATへ。
- 通常モードはリセット / 通常A / 通常B / 通常C / 天国 / 鬼天国の6種。
- モード別ゲーム数天井: リセット 400G+α / 通常A～C 999G+α / 天国 100G+α / 鬼天国 50G+α。
- CZ規定回数天井あり。リセットモードでは1回5.0% / 2回5.0% / 3回90.0%で、最大3回。通常A/Bは5回25.0% / 12回75.0%。通常Cは1回15.0% / 2回42.5% / 3回5.0% / 5回37.5%。天国/鬼天国は1回100%。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_FOR_PUBLICLY_VERIFIABLE_FIELDS
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更時は **有利区間 / ゲーム数天井 / 内部状態 / モードをリセット**。
- 設定変更後は **天国 or リセットモード** のいずれかへ移行する。
- 天国なら100G+α以内、天国非選択でもリセットモードにより400G+α以内にAT当選となるため、通常最大999G+αから大幅に短縮される。
- 設定変更時の1G目は非有利区間。ここでレア小役が成立すると、次回AT初当たり時の「降臨ノ儀」突入が確定。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き時は **有利区間 / ゲーム数天井 / 内部状態 / モードを引き継ぐ**。
- 設定変更時にだけ選ばれるリセット/天国への強制再抽選は行われない。
信頼度: ANALYSIS_HIGH

### powerCycleBehavior
- 設定変更を伴わない電源OFF→ONでは、**天井ゲーム数 / 内部モード / 内部状態を引き継ぐ**とする機種固有比較資料を複数二次資料で確認。
- 有利区間も据え置き扱いで引き継ぐとする整理資料がある。
- ただし純電源OFF→ON単独の全項目をメーカー/当時一次資料で個別明記した資料は固定できなかったため、信頼度は設定変更/据え置き表より一段下げる。
信頼度: ANALYSIS_SINGLE_TO_MULTI_SECONDARY

### gameCounterReset
- 設定変更: ゲーム数天井進行をリセット。
- 据え置き: 引き継ぎ。
- 純電源OFF→ON: 引き継ぎ。
- CZ規定回数天井も設定変更時は新しいモードに基づき再セットされ、据え置きでは継続扱い。
信頼度: ANALYSIS_HIGH（設定変更/据え置き） / ANALYSIS_SINGLE_TO_MULTI_SECONDARY（純電源）

### ceilingAfterReset
- 通常最大ゲーム数天井: **999G+α**。
- 設定変更後: **天国なら100G+α / 非天国でもリセットモード400G+α**。したがって朝一最大は400G+α。
- CZ規定回数天井もリセットモード選択時は **最大3回** に短縮（1回5.0% / 2回5.0% / 3回90.0%）。天国は1回100%。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 設定変更時はリセット/天国の2択で再抽選。
- 設定変更時モード振り分け:
  - 設定1: リセット55.0% / 天国45.0%
  - 設定2: リセット52.5% / 天国47.5%
  - 設定3: リセット50.0% / 天国50.0%
  - 設定4: リセット46.7% / 天国53.3%
  - 設定5: リセット43.3% / 天国56.7%
  - 設定6: リセット40.0% / 天国60.0%
- 据え置き: モード引き継ぎ。
- 純電源OFF→ON: モード引き継ぎとする複数二次資料に整合。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH（設定変更振り分け）

### stateAfterReset
- 設定変更: 内部状態リセット。
- 据え置き: 内部状態引き継ぎ。
- 純電源OFF→ON: 内部状態引き継ぎとする機種固有比較資料あり。
- 設定変更後の通常/高確等の詳細状態振り分け率は、物差し用途に必要な公開固定値として確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
信頼度: ANALYSIS_HIGH（設定変更/据え置き） / ANALYSIS_SINGLE_TO_MULTI_SECONDARY（純電源）

### advantageousSectionReset
- 設定変更: 有利区間リセット。
- 据え置き: 有利区間引き継ぎ。
- 純電源OFF→ON: 据え置き同等に引き継ぐとする二次資料あり。
- 通常稼働中はAT終了後の一部 / エンディング終了後にも有利区間リセット契機あり。
- **設定変更以外**の有利区間リセット後は上位引き戻し「狂・鬼ノ血闘ヲ終わラセルな」へ突入するが、これは設定変更時の朝一恩恵とは分離する。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH（設定変更/据え置き）

### resetBenefits
- ゲーム数天井が通常最大999G+αから **最大400G+α**へ短縮。天国選択時は100G+α以内。
- リセットモードのCZ規定回数天井は最大3回となり、通常A/Bの最大12回より大幅に短縮。
- 設定変更後の初回ATは「降臨ノ儀」突入期待度 **約25%**。
- 設定変更時1G目（非有利区間）にレア小役成立で、次回AT初当たり時の「降臨ノ儀」突入 **確定**。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetPenalties
- 前日のゲーム数天井進行、CZ規定回数進行、内部状態、モードを失うため、前日深いハマり/良好状態を据え置く恩恵は消える。
- 設定変更時は、AT終了後等の通常稼働中の有利区間リセットで発生する上位引き戻し「狂・鬼ノ血闘ヲ終わラセルな」突入恩恵の対象外。
- 設定変更専用の追加不利数値は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 有利区間ランプでは設定変更/据え置き判別不可。
- 朝一1G目にレア小役が成立し、その後の初回ATで「降臨ノ儀」へ突入しなかった場合は据え置き濃厚材料。ただし他契機での「降臨ノ儀」当選もあるため確定判別用途にはしない。
- 朝一400G+αを超えてAT非当選なら、通常の設定変更挙動とは矛盾するため据え置き推測材料になる（ゲーム数の取りこぼし等を除く）。
- 本機固有のリールガックン条件 / 発生率は `傷物語 / S傷物語FS / ロデオ / サミー` と `ガックン / リール / 設定変更 / 朝一` を組み替え再探索したが、高信頼の機種固有公開契約を固定できず `UNVERIFIED_AFTER_RESEARCH`。
信頼度: ANALYSIS_HIGH（有利区間ランプ/1G目挙動） / UNVERIFIED（ガックン）

### numericResetData
- 通常最大ゲーム数天井: **999G+α**。
- 設定変更後ゲーム数天井: **リセット400G+α / 天国100G+α**。
- 設定変更時モード振り分け:
  - 設定1 55.0% / 45.0%
  - 設定2 52.5% / 47.5%
  - 設定3 50.0% / 50.0%
  - 設定4 46.7% / 53.3%
  - 設定5 43.3% / 56.7%
  - 設定6 40.0% / 60.0%
  （左=リセット / 右=天国）
- リセットモードCZ規定回数: **1回5.0% / 2回5.0% / 3回90.0%**。
- 天国/鬼天国CZ規定回数: **1回100%**。
- 設定変更後初回AT「降臨ノ儀」期待度: **約25%**。
- 設定変更時1G目レア小役成立時: 次回AT「降臨ノ儀」 **100%（確定）**。

### publicMorningNumbers
- 朝一最大天井: **400G+α**。
- 天国選択時天井: **100G+α**。
- 天国選択率: **45.0 / 47.5 / 50.0 / 53.3 / 56.7 / 60.0%（設定1→6）**。
- リセットモード選択率: **55.0 / 52.5 / 50.0 / 46.7 / 43.3 / 40.0%（設定1→6）**。
- リセットモードCZ規定回数3回選択: **90.0%**（1回5.0%, 2回5.0%）。
- 設定変更後初回AT「降臨ノ儀」期待度: **約25%**。
- 朝一1G目レア小役成立: 次回AT「降臨ノ儀」 **確定**。

### resetBehavior 再探索メモ
- 取得/再探索日: 2026-09-13。
- `パチスロ傷物語 -始マリノ刻- / 傷物語 / S 傷物語 FS / 230305 / ロデオ / サミー` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電断 / 天井 / CZ規定回数 / モード / 降臨ノ儀 / ガックン / 有利区間` を組み替えて探索。
- サミー発表を転載した業界記事、遊技日本、グリーンべると、P-BOMB、P-WORLD、パチビー、なな徹、一撃、HAZUSE、パチマガスロマガ、ちょんぼりすた、当時/後年攻略整理資料を横断。
- 純電源OFF→ONは天井/モード/内部状態の引き継ぎを複数二次資料で確認したが、全項目を一次資料で個別明記した契約は固定できず信頼度を分離。
- 本機固有ガックンは十分な再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。

## sources
取得日: 2026-09-13

### OFFICIAL / INDUSTRY
1. 遊技日本 / P-WORLD「ユーザーの求める物語を追求！パチスロ新台『パチスロ傷物語－始マリノ刻－』発売／サミー」
   - https://news.p-world.co.jp/articles/24375/nippon
   - ロデオ製造 / 型式名S 傷物語 FS / 6.5号機 / 純増約2.8枚/G / AT初当たりレンジ。
2. グリーンべると / P-WORLD「シリーズ最狂！ガチの倍倍チャンス搭載」
   - https://news.p-world.co.jp/articles/24433/greenbelt
   - 純増約2.8枚/G / AT初当たり / 50枚ベース約32.7G。
3. 遊技日本 / P-WORLD「2倍、2倍、2倍…、本気の倍倍チャンス搭載！」
   - https://news.p-world.co.jp/articles/25075/nippon
   - 2023-09-04導入 / 設定別AT初当たり / AT基本性能。
4. P-BOMB 検定通過情報
   - https://p-bomb.co.jp/industry/new-machine/6371/
   - 型式S 傷物語 FS / 検定番号230305 / ロデオ。
5. ゼンリン 検定満了一覧
   - https://zenrin-net.com/kenteis/listsend?machinesort_id=2&order_date=2026
   - S傷物語FS / ロデオ / 第230305号。
6. P-WORLD 機種DB
   - https://www.p-world.co.jp/machine/database/9864
   - 設定別AT初当たり・機械割 / ベース / AT概要。

### ANALYSIS_HIGH
7. なな徹 解析TOP
   - https://nana-press.com/kaiseki/machine/592/
8. なな徹 朝一・設定変更
   - https://nana-press.com/kaiseki/machine/592/16602/
   - 設定変更/据え置き比較、設定変更時モード振り分け、1G目レア小役、有利区間ランプ。
9. なな徹 モード
   - https://nana-press.com/kaiseki/machine/592/16604/
   - モード別天井、設定変更時モード振り分け、通常時移行率。
10. なな徹 通常時抽選/CZ規定回数
   - https://nana-press.com/kaiseki/machine/592/16603/
   - リセットモードCZ規定回数1/2/3回=5/5/90%。
11. HAZUSE
   - https://hazuse.com/machine/pachislot/2S0305/
   - 型式/検定番号/導入日/モード別天井/CZ規定回数。
12. パチマガスロマガ 通常時モード
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/206/tj04-2.php
   - モード別天井とリセットモード定義。
13. 一撃 天井・リセット
   - https://1geki.jp/slot/s_kizumonogatari/3/
   - 設定変更時最大400G+α / 初回AT降臨ノ儀約25% / 1G目レア小役。
14. 一撃 設定差・初当たり回数別降臨ノ儀
   - https://1geki.jp/slot/s_kizumonogatari/0/
   - 設定変更時初回ATの降臨ノ儀期待度約25%。
15. ちょんぼりすた
   - https://chonborista.com/slot/sammy-slot/190608/
   - 性能コア、設定変更/据え置き、モード振り分け、リセットモードCZ規定回数。

### SECONDARY CROSSCHECK
16. ゆうべる 朝一設定変更・電源OFF→ON比較
   - https://yuberu-777.com/kis_ha-tenzyou/
17. flick7 解析まとめ
   - https://flick7.net/slot/kizumonogatari__k.php
18. ぽこすろっと 朝一恩恵
   - https://www.nankaikoya.jp/kizumonogatari-kitaichi/

## missingFields
- 純電源OFF→ON単独時の有利区間/表示系をメーカー一次資料で項目別に明記した契約: `UNVERIFIED_PRIMARY_AFTER_RESEARCH`（二次資料では据え置き同等CARRY_OVERで一致）。
- 設定変更後の内部状態詳細振り分け率: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 本機固有リールガックン条件/発生率: `UNVERIFIED_AFTER_RESEARCH`。

## conflicts
- 検定番号は公安委員会系資料/HAZUSE/ゼンリンで **230305** が一致。HAZUSEのURLパスが `2S0305` となっているが表示上の検定番号は230305で、URL識別子を検定番号として採用しない。
- 設定変更以外の有利区間リセット後は「狂・鬼ノ血闘ヲ終わラセルな」経由の別恩恵があるため、設定変更時の朝一恩恵と混同しない。

coreStatus: COMPLETE_CORE
recordStatus: COMPLETE_CORE_RESET_V07
