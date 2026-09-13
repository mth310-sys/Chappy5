# パチスロ ジャベリン

recordNo: 1565
machineName: パチスロ ジャベリン
manufacturer: ジェイピーエス（JPS）
formalModel: SジャベリンSA
inspectionCode: 230378
releaseDate: 2023-05-22
generation: 6.5号機 / メダルAT
systemType: AT / 疑似ボーナス / Aタイプ風ゲーム性 / モード管理型
settings: 1 / 2 / 3 / 4 / 5 / 6

## payoutRateBySetting
- 設定1: 97.4%
- 設定2: 98.9%（業界発表97.40/98.92等の小数2桁表記あり）
- 設定3: 100.5%
- 設定4: 102.6%
- 設定5: 104.7%
- 設定6: 109.7%

信頼度: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## initialHitBySetting
### BIG
- 設定1: 1/335.8
- 設定2: 1/324.3
- 設定3: 1/308.7
- 設定4: 1/290.3
- 設定5: 1/273.6
- 設定6: 1/229.2

### REG
- 設定1: 1/384.3
- 設定2: 1/372.3
- 設定3: 1/360.7
- 設定4: 1/342.9
- 設定5: 1/324.7
- 設定6: 1/298.2

### ボーナス合算
- 設定1: 1/178.7
- 設定2: 1/173.3
- 設定3: 1/166.3
- 設定4: 1/157.2
- 設定5: 1/148.5
- 設定6: 1/129.6

信頼度: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## baseGamesPer50
- 約35.0G/50枚。

信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## netIncrease
- BIG: 約4.2枚/G。
- REG: 約2.4枚/G。
- HAZUSEには約4.1枚/G / 約2.1枚/G表記があるため、業界発表と複数解析が一致する4.2 / 2.4をcanonicalとし、HAZUSE値はCONFLICTとして保持。

信頼度: INDUSTRY + ANALYSIS_HIGH / CONFLICT_RECORDED

## basicPayout
- BIG: 約340枚。
- REG: 約80枚。
- ボーナス中は0G連ストック抽選あり。物差し用途では詳細抽選値は原則収集対象外。

信頼度: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時は7モード管理: 通常A / 通常B / 通常C / 天国準備 / 引き戻し / 天国 / 超天国。
- 最大天井は通常A/Bの599G+α。
- 通常C: 499G+α。
- 天国準備: 299G+α。
- 引き戻し: 199G+α。
- 天国: 99G。
- 超天国: 33G。
- 天井到達時はボーナス当選。
- 業界発表では天国ループ約52〜58%、超天国約90%。通常モード全移行表は本DBの完全再現対象外。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESET_CORE_WITH_PUBLIC_RESET_MODE_NUMBERS
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更時は有利区間RESET。
- 天井ゲーム数RESET。
- 内部モードRESET後、設定変更専用振り分けを実施。
- 設定変更後は約9%で即前兆からボーナス直撃し、解析上は1G目告知とされる。
- 本機でモードとは別に独立して管理される「内部状態」の設定変更時処理は、検索語・資料系統変更後も明確な独立定義を確認できず `NOT_SEPARATELY_DEFINED_AFTER_RESEARCH`。

### carryOverBehavior
- 据え置き時は、設定変更を行わない純粋な営業日跨ぎとして有利区間・天井ゲーム数・内部モードをCARRY_OVERする扱い。
- これは機種固有の設定変更/電源OFF→ON比較資料、および6.5号機の据え置き挙動を説明する複数解析に基づく。
- モードとは別の独立内部状態は `NOT_SEPARATELY_DEFINED_AFTER_RESEARCH`。

### powerCycleBehavior
- 純電源OFF→ONでは有利区間CARRY_OVER。
- 天井ゲーム数CARRY_OVER。
- 内部モードCARRY_OVER。
- HAZUSEの「設定変更&電源ON・OFF時」比較表で直接確認。
- モード以外の独立内部状態は `NOT_SEPARATELY_DEFINED_AFTER_RESEARCH`。

### gameCounterReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- 最大天井599G+αのため、前日最終ゲーム数を含む据え置き判別材料になり得る。

### ceilingAfterReset
- 設定変更専用の単一固定短縮天井ではない。
- 設定変更後はモード再抽選により、天国準備25.0%（最大299G+α）、天国0.4%（最大99G）、超天国0.4%（最大33G）が選択される。
- さらに約9%で即前兆からボーナス直撃。
- 通常A/B選択時の最大は599G+α、通常Cは499G+α。
- 「リセット時○G固定」のような別天井は `NONE_CONFIRMED_AFTER_RESEARCH`。

### modeAfterReset
- 設定変更時は内部モードを再抽選。
- 設定1: 通常A37.5% / 通常B27.0% / 通常C9.8% / 天国準備25.0% / 天国0.4% / 超天国0.4%。
- 設定2: 通常A37.1% / 通常B26.6% / 通常C10.5% / 天国準備25.0% / 天国0.4% / 超天国0.4%。
- 設定3: 通常A32.4% / 通常B26.2% / 通常C15.6% / 天国準備25.0% / 天国0.4% / 超天国0.4%。
- 設定4: 通常A29.7% / 通常B23.4% / 通常C21.1% / 天国準備25.0% / 天国0.4% / 超天国0.4%。
- 設定5: 通常A18.0% / 通常B19.9% / 通常C36.3% / 天国準備25.0% / 天国0.4% / 超天国0.4%。
- 設定6: 通常A10.5% / 通常B12.9% / 通常C50.8% / 天国準備25.0% / 天国0.4% / 超天国0.4%。
- 引き戻しは設定変更時表に掲載されず、設定変更初期振り分けでは選択対象外として扱う。
- 据え置き / 純電源OFF→ON: CARRY_OVER。
- 有利区間RESET時（設定変更以外）は設定変更時と別振り分けで、通常A3.1% / 通常B4.3% / 通常C4.3% / 天国準備約48%台 / 引き戻し0.4% / 天国37.5% / 超天国約1.6〜2.3%という解析値が公開されている。設定変更時と混同しない。

### stateAfterReset
- モードとは別に朝一客AIへ必要な独立「内部状態」を定義する高信頼資料を確認できず `NOT_SEPARATELY_DEFINED_AFTER_RESEARCH`。
- モード・天井・有利区間の設定変更/据え置き/純電断挙動は別項目で確定済み。

### advantageousSectionReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- ボーナス後など通常遊技中にも有利区間RESET契機があり、その際は設定変更時と異なるモード振り分けが用意される。

### resetBenefits
- 設定変更後は天国準備25.0%、天国0.4%、超天国0.4%で、少なくとも25.8%が299G+α以内の短い天井を持つモードから開始。
- 約9%で即前兆からボーナス直撃、解析上は1G目告知。
- 高設定ほど通常C比率が高く、設定6では通常C50.8%。通常C天井は499G+αで、通常A/Bより浅い。

### resetPenalties
- 設定変更で前日の天井進行と内部モードを失う。
- 有利区間RESET時（設定変更以外）は天国以上が約40%とされる一方、設定変更時は天国/超天国合算0.8%で、天国準備25%＋即前兆抽選という別構成。したがって設定変更を「すべての高モードが優遇」と単純評価しない。
- その他の朝一専用不利抽選は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 前日最終G + 当日Gが据え置き時の最大599G+αを明確に超えてもボーナス非当選なら、前日天井進行を引き継いでいない可能性が高く設定変更推測材料となる。
- 設定変更後は約9%で1G目告知とされるが、1G目ボーナスが設定変更時のみ絶対に発生する排他的現象であることまでは確認できないため、単独で「変更確定」とはしない。
- 本機固有のガックン条件/発生率は、機種名・型式・メーカー名と「ガックン / リール始動 / 設定変更 / 据え置き / 朝一」を組み替えて再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間ランプのみで設定変更/据え置きを確定する機種固有手順は `NONE_CONFIRMED_AFTER_RESEARCH`。

### numericResetData
- 設定変更時即前兆/1G目告知: 約9%。
- 設定変更時天国準備: 25.0%（全設定共通）。
- 設定変更時天国: 0.4%（全設定共通）。
- 設定変更時超天国: 0.4%（全設定共通）。
- 設定変更時「天国準備以上」合算: 25.8%。
- 設定変更時通常C: 設定1 9.8% / 2 10.5% / 3 15.6% / 4 21.1% / 5 36.3% / 6 50.8%。
- モード別天井: 通常A/B 599G+α / 通常C 499G+α / 天国準備 299G+α / 引き戻し 199G+α / 天国99G / 超天国33G。

### publicMorningNumbers
- 約9%: 設定変更後の即前兆→1G目告知。
- 25.0%: 天国準備。
- 25.8%: 天国準備以上合算。
- 高設定ほど通常C選択率上昇、設定6は50.8%。
- 設定変更専用の単一固定短縮天井値は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetBehavior 再探索メモ
- 取得/再探索日: 2026-09-13。
- `パチスロ ジャベリン / ジャベリン / SジャベリンSA / 230378 / JPS / ジェイピーエス` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電断 / 有利区間 / 天井 / モード / モード振り分け / ガックン / 判別` を組み替えて検索。
- 業界発表、検定通過記事、P-WORLD/遊技日本、Amusement Japan、1G連、HAZUSE、ちょんぼりすた、スロパチクエスト、イチカツ、K-Navi、必勝本等を横断。

## conflicts
- releaseDate: 一撃の後年機種ページ/紹介動画に `2023-05-08導入` 表記がある一方、2023年3月22日の遊技日本/P-WORLD業界発表が「導入開始は5月22日予定」、HAZUSE・ちょんぼりすた・スロパチクエスト・イチカツ等の複数解析も2023-05-22で一致。canonicalは **2023-05-22**。5/8は `CONFLICT_SINGLE_SECONDARY_DATE` として保持。
- netIncrease: 業界発表・複数解析はBIG約4.2枚/G・REG約2.4枚/Gで一致。一方HAZUSEは約4.1枚/G・約2.1枚/G。平均せず前者をcanonical、後者を `CONFLICT_ANALYSIS_VALUE_OR_DEFINITION` として保持。
- manufacturer表記: HAZUSE本文に「ジェイビーエス」と見える表記箇所があるが、型式検定通過記事・プレス発表は株式会社ジェイピーエス（JPS）。本DBでは **ジェイピーエス（JPS）** をcanonical。

## sources
取得日: 2026-09-13

- 遊技日本 / P-WORLD 業界ニュース: https://news.p-world.co.jp/articles/23444/nippon
  - 2023-03-22発表、型式SジャベリンSA、設定別BB/RB/合算/出玉率、BIG約340枚・REG約80枚、7モード、モード別最大ハマリ、5月22日導入予定。
- Amusement Japan: https://amusement-japan.co.jp/article/detail/10003358/
  - JPS説明会、一般販売機、Aタイプ風ATという開発コンセプト。
- 遊技日本 検定通過: https://yugi-nippon.com/pachinko-new-machine/post-57569/
  - 広島県公安委員会ほかで `SジャベリンSA` の検定通過確認。
- HAZUSE 基本/AT: https://hazuse.com/machine/pachislot/SX0048/genre/209/
  - 型式 `SジャベリンSA`、検定番号 `230378`、2023-05-22導入、設定変更時モード詳細、有利区間RESET時モード詳細。
- HAZUSE 天井: https://hazuse.com/machine/pachislot/SX0048/genre/207/
  - モード別天井、設定変更/電源ON・OFF時の有利区間・天井・モード比較、設定変更後約9%即前兆、設定変更時モード振り分け。
- スロパチクエスト 設定: https://www.slopachi-quest.com/article/javelin-settei/
  - 2023-05-22、約35G/50枚、純増4.2/2.4、設定別スペック、設定変更時モード振り分け。
- スロパチクエスト 天井: https://www.slopachi-quest.com/article/javelin-tenjou/
  - 599G+α天井、朝一リセット項目。
- ちょんぼりすた: https://chonborista.com/slot/jps-slot/186031/
  - 2023-05-22、約35G/50枚、BIG4.2枚/G・REG2.4枚/G、設定別スペック、天井/モード。
- イチカツ: https://itikatu.jp/javelin/
  - 2023-05-22、設定変更時約25%天国準備以上+約9%即前兆、電源ON/OFF天井引継ぎ、約35G/50枚。
- 一撃 プレス発表: https://1geki.jp/repo/20230322jps/
  - 2023-03-22、型式SジャベリンSA、BIG約340枚、最大600G以内の当選という製品説明。
- 一撃 後年紹介ページ: https://1geki.jp/slot/s_javelin/7/
  - `2023年5月8日導入` 表記。多数の5/22資料と競合するためcanonicalには不採用。
- K-Navi 展示会速報: https://p-kn.com/topics/exhibition/1985/
  - JPS説明会、PB企画から一般販売に至った経緯。
- パチ＆スロ必勝本: https://p.hisshobon.jp/news/1851
  - 2023年5月下旬導入案内、BIG約340枚・REG約80枚。

## missingFields
- 本機でモードと別に独立管理される朝一「内部状態」の定義/設定変更・据え置き・純電断処理: `NOT_SEPARATELY_DEFINED_AFTER_RESEARCH`。
- 本機固有ガックン条件/発生率: `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間ランプだけでの設定変更確定法: `NONE_CONFIRMED_AFTER_RESEARCH`。

## status
coreStatus: COMPLETE_CORE
qaResetBehavior: COMPLETE_RESET_CORE_WITH_PUBLIC_RESET_MODE_NUMBERS
