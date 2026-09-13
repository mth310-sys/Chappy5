# S 織田信奈の野望 全国版

recordNo: 1577
machineName: S 織田信奈の野望 全国版
manufacturer: 新日テクノロジー（総発売元: フィールズ / SPIKYブランド表記あり）
formalModel: S織田信奈の野望 全国版TA
inspectionCode: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2023-07-18
generation: 6.5号機 / メダル機
systemType: AT / 差枚数管理 / 上位AT搭載
settings: L / 1 / 2 / 4 / 5 / 6

## payoutRateBySetting
- 設定1: 97.7%
- 設定2: 99.0%
- 設定4: 102.5%
- 設定5: 105.1%
- 設定6: 110.3%
- 設定L: 公開機械割を今回固定できず
信頼度: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## initialHitBySetting
### CZ「合戦の刻」
- 設定1: 1/179.0
- 設定2: 1/167.7
- 設定4: 1/147.4
- 設定5: 1/138.0
- 設定6: 1/115.6

### AT「姫武将RUSH」
- 設定1: 1/280.6
- 設定2: 1/264.8
- 設定4: 1/227.3
- 設定5: 1/205.3
- 設定6: 1/158.4
信頼度: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## baseGamesPer50
- 約33G/50枚
- 約33.6G/50枚表記の解析資料もあり、丸め/算出差として保持。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## netIncrease
- AT「姫武将RUSH」: 約2.5枚/G
- 上位AT「極上嫁武将RUSH」も純増約2.5枚/G。上位化は主に上乗せ性能・特化ゾーン性能の強化。
信頼度: INDUSTRY / ANALYSIS_HIGH

## basicPayout
- AT開始時は初期特化ゾーン「南蛮コーデ七変化」で差枚数を上乗せし、100枚未満では終了しないため初期差枚数は最低100枚相当。
- 上位AT「極上嫁武将RUSH」は設定1の出玉期待値約1,250枚と業界発表あり。
- AT終了後は引き戻し+育成ゾーンへ必ず移行し、150G以内のAT当選期待度は約43%（通常のAT終了後を含む一般仕様。設定変更専用値ではない）。
信頼度: INDUSTRY / ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時は戦況ゲージMAXから前兆「戦略会議」→CZ「合戦の刻」→ATを目指す。
- ゲーム数天井: 通常時最大999G+α。到達後の戦略会議を経由し、勝利濃厚CZ「合戦の刻」へ移行してAT当選。
- CZスルー天井: 「合戦の刻」を最大3回失敗後、4回目は勝利濃厚。シナリオによって3回目までに勝利濃厚CZが来る場合あり。
- 通常時内部状態: 通常 / 高確 / 超高確。
- CZ「合戦の刻」の基本AT期待度は約52%。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_FOR_PUBLICLY_VERIFIABLE_FIELDS
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更時は **有利区間 / ゲーム数天井 / CZスルー進行 / 内部状態をリセット**し、朝一用の優遇抽選を行う。
- 設定変更時は初期忠誠度が優遇され、約50%でレベル2「好感」以上から開始。
- 25%で高確状態から開始。
- 初回の前兆「戦略会議」および初回CZ「合戦の刻」の突破関連抽選が優遇。
- 初回CZ「合戦の刻」当選時は約10%でプレミアムCZ/特化ゾーン「武田信玄襲来」へ移行し、突入時点でAT確定。
- CZシナリオは最大3回目で勝利濃厚となるシナリオ（1/5/9/13）の選択率が優遇される。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き時は **ゲーム数天井 / CZスルー進行 / 内部状態を引き継ぐ**。
- 有利区間も設定変更を伴わない据え置きでは継続扱い。
- 朝一表示のみで設定変更/据え置きを確定判別できる公開要素は確認できない。
信頼度: ANALYSIS_HIGH

### powerCycleBehavior
- 設定変更を伴わない電源OFF→ONでは **ゲーム数天井 / 内部状態 / 有利区間を引き継ぐ**と複数攻略資料で整理されている。
- CZスルー進行も据え置き側の進行として扱う。
- 純電断単独で表示・ステージがどのように初期化されるかを網羅した機種固有契約は今回固定できず `UNVERIFIED_AFTER_RESEARCH`。
信頼度: ANALYSIS_HIGH / PARTIAL_FOR_DISPLAY_LAYER

### gameCounterReset
- 設定変更: 999G+αゲーム数天井とCZスルー進行をリセット。
- 据え置き / 純電源OFF→ON: 内部天井進行を引き継ぐ。

### ceilingAfterReset
- 設定変更時に **999G+αから固定○Gへ短縮するゲーム数天井短縮は確認されない**。
- ただし初回CZ突破率・CZシナリオ・高確/忠誠度等が優遇されるため、実質的な早当たり期待は上昇。
- 通常ゲーム数天井: 999G+α。
- CZスルー天井: 最大3スルー後の4回目。設定変更後は3回目までに勝利濃厚となるシナリオの選択率が優遇。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 本機は一般的なA/B/C型ゲーム数モードより、CZシナリオ・忠誠度・内部状態の組み合わせが朝一挙動を左右する。
- 設定変更時はCZ「合戦の刻」のシナリオを再抽選し、最大3回目で勝利濃厚となるシナリオ選択率が優遇。
- 一部資料に「天国モード」表現があるが、設定変更専用の完全な天国移行率を高信頼資料で固定できず、canonical数値へ採用しない。
- 据え置き / 純電断のシナリオ継続契約は天井・状態引継ぎと整合するが、シナリオ単独の直接記述は限定的なため `CARRY_OVER_SUPPORTED_BY_RESET_TABLES` とする。

### stateAfterReset
- 設定変更: 内部状態をリセット後、**25%で高確スタート**。
- 据え置き / 純電源OFF→ON: 内部状態を引き継ぐ。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### advantageousSectionReset
- 設定変更: 有利区間リセット。
- 据え置き / 純電源OFF→ON: 有利区間引き継ぎ。
- 有利区間ランプでは設定変更/据え置きを判別できない。
信頼度: ANALYSIS_HIGH

### resetBenefits
- 初期忠誠度レベル2以上スタート約50%。
- 高確スタート25%。
- 初回戦略会議からのCZ当選率が通常初回系統で高く、設定別公開値あり。
- 初回CZ「合戦の刻」当選時の約10%で「武田信玄襲来」。
- 初回CZ突破関連抽選および3回目までに勝利濃厚となるCZシナリオ選択率を優遇。

### resetPenalties
- 設定変更により前日のゲーム数天井進行、CZスルー進行、内部状態、有利区間の蓄積を失う。
- 設定変更専用の追加不利数値は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 有利区間ランプで設定変更/据え置き判別は不可。
- 高確開始、初期忠誠度、初回CZ優遇は変更推測材料にはなるが、いずれも単独の確定判別要素ではない。
- 本機固有のリールガックン条件・発生率は `織田信奈 / 全国版 / S織田信奈の野望全国版TA / 新日テクノロジー / SPIKY` と `ガックン / 設定変更 / リセット / 朝一` を組み替えて再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- 設定変更時 初期忠誠度: レベル1「通常」50.0% / レベル2「好感」44.9% / レベル3「ちゅー誠」5.1%。レベル2以上合計50.0%。
- 設定変更時 高確スタート: **25%**。
- 設定変更後 初回CZ「合戦の刻」当選時「武田信玄襲来」: **約10%**。
- 設定変更後/AT終了後の初回「戦略会議」移行時CZ当選率: 設定1 60.5% / 設定2 60.5% / 設定4 65.6% / 設定5 66.8% / 設定6 75.0%。※設定変更専用値だけではなくAT終了後初回も同じ公開テーブル。
- 設定変更専用のゲーム数天井短縮: **NONE_CONFIRMED**。

### publicMorningNumbers
- 初期忠誠度レベル2以上: **50.0%**。
- 高確スタート: **25%**。
- 初回「武田信玄襲来」: **約10%**。
- 初回戦略会議→CZ当選率: **60.5 / 60.5 / 65.6 / 66.8 / 75.0%**（設定1/2/4/5/6。設定変更後・AT終了後初回共通）。
- 設定変更時の3回目以内勝利濃厚シナリオ選択率: 優遇は確認できるが具体的振り分け率は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### resetBehavior 再探索メモ
- 取得/再探索日: 2026-09-13。
- `S 織田信奈の野望 全国版 / 織田信奈 全国版 / S織田信奈の野望全国版TA / 新日テクノロジー / SPIKY / フィールズ` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 天井短縮 / モード / 状態 / 高確 / 忠誠度 / 合戦の刻 / ガックン / 有利区間` を組み替えて検索。
- メーカー公式機種サイト、フィールズ/業界記事、検定通過記事、なな徹、一撃、パチマガスロマガ、必勝本、P-WORLD、当時攻略資料を横断。
- 検定記事の一部に製造元を「朝日テクノロジー」とする表記がある一方、発売発表・複数業界資料・実機DBは「新日テクノロジー」で一致するため、メーカーcanonicalは新日テクノロジーとした。
- 検定番号の数値コード、本機固有ガックン、設定変更時CZシナリオの完全振り分けは十分な再探索後も固定できず推測補完しない。

## sources
取得日: 2026-09-13
- 公式機種サイト（ゲームフロー/AT構造）: https://www.s-odanobuna.jp/
- Amusement Japan（製造元・6.5号機・発売）: https://amusement-japan.co.jp/article/detail/10003496/
- 遊技日本 / P-WORLD（型式名・発売発表）: https://news.p-world.co.jp/articles/24090/nippon
- 遊技通信 / P-WORLD（純増・上位AT期待値・150G以内期待度）: https://news.p-world.co.jp/articles/24494/yugitsushin
- 遊技日本 / P-WORLD（AT初当り・出玉率）: https://news.p-world.co.jp/articles/24701/nippon
- 遊技日本 / P-WORLD（検定通過・型式）: https://news.p-world.co.jp/articles/24049/nippon
- グリーンべると（検定通過型式）: https://web-greenbelt.jp/post-72363/
- パチ＆スロ必勝本（導入日・ベース・純増）: https://p.hisshobon.jp/vpage/2550/2
- なな徹（機種TOP・AT確率・機械割・天井）: https://nana-press.com/kaiseki/machine/582/
- なな徹（朝一・設定変更・有利区間）: https://nana-press.com/kaiseki/machine/582/15867/
- なな徹（天井）: https://nana-press.com/kaiseki/machine/582/15865/
- 一撃（ベース）: https://1geki.jp/slot/s_odanobuna_zen/4/
- ちょんぼりすた（CZ/AT確率・機械割・導入日）: https://chonborista.com/slot/spiky/189031/
- スロパチクエスト（設定変更/電源OFF→ON・天井・初回数値）: https://www.slopachi-quest.com/article/odanobuna-yabou-zenkokuban-tenjou/

## conflicts
- manufacturer article typo: 検定通過記事の一部は「朝日テクノロジー」表記。一方、発売発表・複数業界資料は「新日テクノロジー」で一致。canonical=`新日テクノロジー`、誤記候補として保持。
- setting label: 一部二次資料が設定2相当の数値（AT 1/264.8、機械割99.0%）を「設定3」と表記する。高信頼解析・なな徹・業界スペックは設定1/2/4/5/6構成で一致するため設定2をcanonicalとし、`CONFLICT_SOURCE_SETTING_LABEL` とする。
- baseGamesPer50: 約33G vs 約33.6G。定義/丸め差として両方保持し数値平均しない。

## missingFields
- inspectionCode: UNVERIFIED_AFTER_RESEARCH
- settingL payoutRate: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- settingChange CZ scenario full distribution: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- machine-specific reel gakkun: UNVERIFIED_AFTER_RESEARCH
- pure power-cycle display/stage initialization contract: UNVERIFIED_AFTER_RESEARCH

coreStatus: COMPLETE_CORE
resetQaStatus: COMPLETE_FOR_PUBLICLY_VERIFIABLE_FIELDS
