# SLOTアルドノア・ゼロ

No: 1411
machineName: SLOTアルドノア・ゼロ
machineNameVariants: Sアルドノア・ゼロ / アルドノアゼロ / SLOT ALDNOAH.ZERO
manufacturer: エレコ
releaseDate: 2021-05-10
formalModelName: S／アルドノア・ゼロ／NL
certificationNumber: 0S1352

generation: 6.1号機
systemType: AT / 擬似ボーナス経由 / ライジングバトルAT

## identity / release
- ユニバーサルエンターテインメント公式がエレコ製新機種として2021年5月導入予定を発表。
- 1geki、K-Navi、P-WORLD等でホール導入開始日2021-05-10を確認。
- 遊技通信の東京都公安委員会検定通過情報で型式 `S／アルドノア・ゼロ／NL`、検定番号 `0S1352` を確認。
- reliability: OFFICIAL / INDUSTRY / ANALYSIS_HIGH

## payoutRateBySetting
| 設定 | 出玉率 |
|---:|---:|
| 1 | 97.7% |
| 2 | 99.2% |
| 3 | 100.8% |
| 4 | 102.6% |
| 5 | 105.2% |
| 6 | 110.2% |
- 1geki、P-WORLD、複数解析資料で一致。
- reliability: ANALYSIS_HIGH

## initialHitBySetting
| 設定 | アセイラムチャンス初当り | AT初当り | AC&AT初当り合算 |
|---:|---:|---:|---:|
| 1 | 1/299.2 | 1/499.4 | 1/187.1 |
| 2 | 1/269.2 | 1/419.9 | 1/164.0 |
| 3 | 1/281.2 | 1/416.7 | 1/167.9 |
| 4 | 1/249.6 | 1/342.3 | 1/144.3 |
| 5 | 1/269.9 | 1/319.1 | 1/146.2 |
| 6 | 1/223.9 | 1/227.5 | 1/112.8 |
- reliability: ANALYSIS_HIGH

## baseGamesPer50
- 約50G/50枚。
- グリーンべると、ちょんぼりすた、複数解析資料で一致。
- reliability: INDUSTRY / ANALYSIS_HIGH

## netIncrease
- AT「アルドノア・ゼロ」: 約2.0〜4.0枚/G。ベルナビ状態により変動。
- BIG: 約4.0枚/G。
- reliability: ANALYSIS_HIGH

## basicPayout
- アセイラムチャンス（AC）: 20G継続。BB昇格期待度約30%。
- BIG BONUS: 20G、純増約4枚/G。BB当選時点でAT突入確定。
- AT「アルドノア・ゼロ」: 1セット30G+α、自力継続型。全11戦構成。
- 青7BB（エピソード）: AT2セット以上確定。
- reliability: ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時は①規定ゲーム数、②チャンス目等からのCZ、③ベルポイント100pt到達からのCZという「トリプル抽選」。いずれかの抽選が行われる合算契機は約1/40と公式発表。
- 有利区間開始から最大666G消化でAC or BBに当選。ただし直前CZ等で666Gを超える例外あり。
- 有利区間移行時にAC/青7BBの種別と規定ゲーム数を抽選。AC選択時は設定1でも1〜128Gが20.3%、193〜256Gが31.6%。
- 初期ベルptは有利区間移行ゲームの成立役で決定。チャンスベルなら99pt確定、その他は30pt 50.0% / 50pt 25.0% / 70pt 18.8% / 99pt 6.3%。

coreStatus: COMPLETE_CORE

## resetBehavior
resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE_WITH_POWER_CYCLE_AND_NUMERIC_INITIAL_SECTION_DATA
resetQaLastUpdated: 2026-09-12

### settingChangeBehavior
- 設定変更時は有利区間をRESETし、新たな有利区間移行抽選を受ける。
- 天井ゲーム数はRESET、内部状態は再抽選/RESET。
- 朝一ステージは「わだつみ」。サブ液晶ゲーム数は0G表示となる。
- 有利区間移行時に規定ゲーム数と初期ベルptを新たに抽選する。
- reliability: ANALYSIS_HIGH

### carryOverBehavior
- 据え置き時は、設定変更を伴わない通常の電断復帰契約として天井進行・内部状態・有利区間状態をCARRY_OVERする解析が確認できる。
- ただしAC失敗後/AT終了後は機種仕様として必ず非有利区間へ転落するため、その契機を跨いだ「前区間の有利区間引継ぎ」は存在しない。
- 朝一のサブ液晶ゲーム数は電源OFF→ONで0G表示になるため、表示値だけでは内部天井の据え置き判別はできない。
- reliability: ANALYSIS_HIGH

### powerCycleBehavior
- 設定を変更せず電源OFF→ONのみの場合、天井はCARRY_OVER、内部状態はCARRY_OVER、有利区間ランプ状態もCARRY_OVERとの当時解析あり。
- 電断前が通常時なら復帰ステージは基本「わだつみ」。通常時以外ならステージを引き継ぐとの解析もある。
- サブ液晶ゲーム数表示は0Gへ戻るため、表示上のゲーム数RESETと内部天井進行のCARRY_OVERを分離して扱う。
- ちょんぼりすた初期記事では電源OFF→ONの天井/内部状態を「調査中」としていたが、後続Pachiseven解析では引継ぎと明記。後続の具体化をcanonicalとし、旧未確定表記は履歴上の情報不足として扱う。
- reliability: ANALYSIS_HIGH

### gameCounterReset
- 設定変更時: 内部の有利区間/天井進行をRESET。
- 据え置き/純電断: 内部天井進行をCARRY_OVER。
- 純電断時はサブ液晶表示のみ0Gへ戻る。
- reliability: ANALYSIS_HIGH

### ceilingAfterReset
- 設定変更後も新規有利区間の通常契約で最大666G消化 → AC or BB。
- 設定変更専用の固定短縮天井は確認できない。
- 規定ゲーム数到達後に前兆が始まり、CZ割込み等で実際の告知が666Gを超える場合あり。
- reliability: ANALYSIS_HIGH

### modeAfterReset
- 一般的なA/B/天国型の「設定変更専用モード」は確認できない。
- 設定変更で新規有利区間へ入り、AC/青7BB種別および規定ゲーム数を再抽選する。
- これは設定変更専用テーブルではなく、有利区間移行時共通テーブルとして扱う。
- reliability: ANALYSIS_HIGH

### stateAfterReset
- 設定変更時: 内部状態RESET/再抽選。
- 純電断時: 内部状態CARRY_OVER。
- チェリー/スイカでCZ高確を管理するが、設定変更時の高確/低確初期振り分けの公開固定値は、機種名・型式・メーカー名・「リセット/朝一/設定変更/内部状態/高確/初期振り分け」で資料系統を変えて再探索しても固定できず `UNVERIFIED_AFTER_RESEARCH`。
- reliability: ANALYSIS_HIGH / UNVERIFIED_AFTER_RESEARCH

### advantageousSectionReset
- 設定変更時は有利区間RESET。
- 純電断/据え置きでは進行中有利区間をCARRY_OVER。
- 通常時から有利区間ランプ点灯型。
- AC失敗時およびAT終了後は必ず非有利区間へ転落し、その後に新規有利区間へ移行する。
- reliability: ANALYSIS_HIGH

### resetBenefits
- 設定変更で新規有利区間となるため、規定ゲーム数・初期ベルptを再抽選する。
- 有利区間移行時の初期ベルptは、チャンスベルなら99pt確定。その他成立役では30pt 50.0% / 50pt 25.0% / 70pt 18.8% / 99pt 6.3%。設定変更時も同じ新規有利区間契約を受ける。
- AC選択時の規定ゲーム数は設定1で1〜128G 20.3%、193〜256G 31.6%など、早いゲーム数が一定割合で選ばれる。ただしこれは設定変更専用優遇ではなく有利区間開始時共通値。
- 「朝一だけの追加恩恵」は当時解析で特に無しとされる。
- reliability: ANALYSIS_HIGH

### resetPenalties
- 設定変更により前日の天井進行および内部状態を失う。
- 設定変更専用の定量的不利率/期待値低下率は `NO_PUBLIC_RESET_SPECIFIC_PENALTY_RATE_FOUND_AFTER_RESEARCH`。

### resetDetection
- 通常時から有利区間ランプが点灯するタイプのため、店舗側対策がなければ朝一消灯=設定変更濃厚、点灯=据え置き濃厚。
- 純電断でもサブ液晶ゲーム数が0G表示となるため、ゲーム数表示0だけでは設定変更判別不可。
- 朝一ステージ「わだつみ」も設定変更/通常時からの純電断の双方で発生し得るため単独判別不可。
- 本機固有のリールガックン条件/発生率は、機種名・正式型式・エレコ/ユニバーサル・朝一/リセット/設定変更/ガックンで再探索しても固定できず `UNVERIFIED_AFTER_RESEARCH`。
- reliability: ANALYSIS_HIGH / UNVERIFIED_AFTER_RESEARCH

### numericResetData
- 新規有利区間の天井: 最大666G → AC or BB。
- 有利区間開始時ボーナス種別（設定1）: AC 96.9% / 青7BB 3.1%。設定6ではAC 90.6% / 青7BB 9.4%。
- AC選択時規定G（設定1）: 1〜128G 20.3% / 129〜192G 3.5% / 193〜256G 31.6% / 257〜320G 2.0% / 321〜384G 9.0% / 385〜448G 1.6% / 449〜512G 13.7% / 513〜576G 0.8% / 577〜640G 17.6%。
- 青7BB選択時規定G（全設定共通）: 1〜128G 1.2% / 129〜192G 24.6% / 193〜256G 1.6% / 257〜320G 13.7% / 321〜384G 0.4% / 385〜448G 10.9% / 449〜512G 0.8% / 513〜576G 5.5% / 577〜640G 41.4%。
- 初期ベルpt（有利区間移行時）: チャンスベル=99pt 100%。その他成立役=30pt 50.0% / 50pt 25.0% / 70pt 18.8% / 99pt 6.3%。
- 上記は「設定変更専用値」ではなく、新規有利区間移行時の共通公開数値。設定変更は有利区間RESETを伴うため朝一にも適用される。

## conflicts
- 世代表記は一部二次資料で「6号機」、別資料で「6.1号機」と表記される。本DBでは2021年導入時期と解析DB表記に合わせ `6.1号機` とし、ゲーム性能数値には影響しない表記差として扱う。
- ちょんぼりすたの初期解析では電源OFF→ON時の天井/内部状態を「調査中」としている一方、後続Pachisevenは天井・内部状態・有利区間ランプの引継ぎを明記。数値競合ではなく公開時期による情報更新差と判断し、後続の具体的解析をcanonicalとした。

## missingFields
- 設定変更時のCZ高確/内部状態の確率付き初期振り分け: UNVERIFIED_AFTER_RESEARCH
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH
- 設定変更専用の固定短縮天井・朝一専用モード・追加恩恵率: NO_PUBLIC_RESET_SPECIFIC_VALUE_FOUND_AFTER_RESEARCH

## sources
取得日: 2026-09-12
- https://www.universal-777.co.jp/news/20210308001498/
- https://www.yugitsushin.jp/news/maker/20210323-1250/
- https://1geki.jp/slot/s_aldnoahzero/
- https://1geki.jp/slot/s_aldnoahzero/3/
- https://1geki.jp/slot/s_aldnoahzero/41/
- https://1geki.jp/slot/s_aldnoahzero/44/
- https://1geki.jp/slot/s_aldnoahzero/80/
- https://nana-press.com/kaiseki/machine/121/3542/
- https://nana-press.com/kaiseki/machine/121/3979/
- https://pachiseven.jp/machines_v2/6296
- https://pachiseven.jp/articles/detail/13420
- https://chonborista.com/slot/universal-slot/134424/
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/105/tj07-1.php
- https://web-greenbelt.jp/post-45844/
- https://www.p-world.co.jp/machine/database/9362
- https://p-kn.com/slot/3571/
- https://www.slopachi-quest.com/article/aldnoah-zero-tenjou/
- https://p-media.info/post-26151/

recordStatus: COMPLETE_CORE_RESET_V07
