# パチスロ幼女戦記

recordNo: 1538
machineName: パチスロ幼女戦記
manufacturer: サミー
formalModel: Sパチスロ幼女戦記 ZR
inspectionCode: 2S0766
releaseDate: 2022-12-05
generation: 6.5号機 / メダル機 / 有利区間最大4000G世代
systemType: AT / 擬似ボーナス経由・規定ゲーム数管理型AT

## payoutRateBySetting
- 設定L: 82.7%（複数二次解析で一致。ただしなな徹等の高信頼解析は「調査中」表記のため `ANALYSIS_MULTI_SECONDARY_NOT_HIGH_SOURCE_CONFIRMED`）
- 設定1: 97.9%
- 設定2: 98.4%
- 設定4: 103.1%
- 設定5: 105.8%
- 設定6: 108.1%

信頼度: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH（設定Lのみ ANALYSIS_MULTI_SECONDARY_NOT_HIGH_SOURCE_CONFIRMED）

## initialHitBySetting
### BONUS合算
- 設定1: 1/241.5
- 設定2: 1/234.3
- 設定4: 1/205.5
- 設定5: 1/183.7
- 設定6: 1/157.9

### AT「白銀RUSH」初当たり
- 設定1: 1/636.8
- 設定2: 1/642.1
- 設定4: 1/565.4
- 設定5: 1/531.4
- 設定6: 1/491.6

- 設定LのBONUS/AT初当たりは公開値を固定できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

信頼度: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## baseGamesPer50
- 約38.1G/50枚。

信頼度: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## netIncrease
- 擬似ボーナス / AT「白銀RUSH」: 約2.6枚/G。

信頼度: OFFICIAL_ANNOUNCEMENT / INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## basicPayout
- 幼女戦記BONUS: 約100枚。
- FAIRY BONUS: 差枚数100枚獲得まで継続する解析・試打資料あり。
- AT「白銀RUSH」: 1セット10G+α、純増約2.6枚/G、トータル継続率約94.2%。
- ATはV獲得パートと「V COMBAT」の継続パートをループするセット継続型。
- AT終了後の引き戻しを含む期待獲得枚数は約1000枚超とする解析あり。
- 最上位トリガー「EVIL ATTACK」: 平均Vストック約18個、突入時期待獲得枚数約2500枚overの公開解析あり。

信頼度: OFFICIAL_ANNOUNCEMENT / INDUSTRY / ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時は規定ゲーム数 / レア役 / CZから擬似ボーナスを目指し、ボーナス中抽選や「OPERATION203」成功等からATへ突入。
- 規定ゲーム数モードは通常A / 通常B / 天国 / 超天国の4種。
- モード別最大天井: 通常A 512G+α / 通常B 384G+α / 天国 128G+α / 超天国 128G+α。
- 超天国は80%over（別資料では約83%表現）で同モードループ。これは丸め/表現差として扱い、朝一専用値とは分離。
- CZ「恩寵ZONE」は10〜30G、成功期待度約30%。上位「超恩寵ZONE」はボーナス当選濃厚で、消化中AT抽選の成功期待度約50%とする解析あり。
- 「OPERATION203」は8G+αのAT高確率/CZ。
- 設定Lは遊技中・デモ中の下パネル点滅で判別可能とする複数二次解析あり。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESET_CORE_WITH_PUBLIC_MODE_TABLE_OP_RANK_AND_OP203_START_RATE
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更時は有利区間RESET。
- 天井 / 内部ゲーム数RESET。
- 内部モードRESET / 再抽選。
- 内部状態RESET。
- OPランクRESET / 再抽選。
- 朝一は「現代」ステージから開始。
- 有利区間移行時の成立役を参照してモードを再抽選する。

### carryOverBehavior
- 据え置き時は有利区間CARRY_OVER。
- 天井 / 内部ゲーム数CARRY_OVER。
- 内部モードCARRY_OVER。
- 内部状態CARRY_OVER。
- OPランクCARRY_OVER。
- 見た目の開始ステージは「現代」ステージとなる解析が複数で一致。

### powerCycleBehavior
- 純電源OFF→ONでは有利区間CARRY_OVER。
- 天井 / 内部ゲーム数CARRY_OVER。
- 内部モードCARRY_OVER。
- 内部状態CARRY_OVER。
- OPランクCARRY_OVER。
- 開始ステージは「現代」。設定変更時と同じ見た目になるためステージ単独では判別不可。

### gameCounterReset
- 設定変更: 天井 / 内部ゲーム数RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。

### ceilingAfterReset
- 設定変更専用の固定短縮天井ではなく、再抽選されたモードで最大天井が決まる。
- 通常A: 512G+α。
- 通常B: 384G+α。
- 天国: 128G+α。
- 超天国: 128G+α。
- 設定変更時は通常成立役でも天国以上が約1/3選ばれるため、結果として128G以内天井となる割合が通常より高い。

### modeAfterReset
- 設定変更時 / 有利区間移行時は成立役別にモードを再抽選。全設定共通の公開値:
  - その他: 通常A 50.0% / 通常B 16.7% / 天国 32.9% / 超天国 0.4%。
  - スイカ / 弱チェリー / 勲章揃い: 通常A 0% / 通常B 50.0% / 天国 49.2% / 超天国 0.8%。
  - チャンスチェリー / チャンス目: 通常A 0% / 通常B 0% / 天国 83.3% / 超天国 16.7%。
- 通常成立役でも天国以上合計33.3%。高信頼解析の「最低でも約1/3で天国以上」と一致。
- 朝一1G目に弱レア役等を引いた場合は天国以上50.0%、強レア役なら天国以上100%となる。

### stateAfterReset
- 設定変更: 内部状態RESET。
- 据え置き / 純電断: CARRY_OVER。
- 設定変更専用の状態レベル詳細振り分けは物差し用途を超えるため収集対象外。

### advantageousSectionReset
- 設定変更時: 有利区間RESET。
- 据え置き / 純電断: 有利区間CARRY_OVER。
- 稼働中の有利区間リセット契機として設定変更、AT終了時の一部、エンディング後が公開されている。
- AT終了時に「当該有利区間でボーナス非当選」かつ「当該有利区間の獲得枚数999枚以下」の条件を満たしてリセットされた場合、50%でOP203へ移行する解析あり。これは設定変更専用恩恵ではないため分離保存。

### resetBenefits
- 通常成立役でも設定変更後は天国以上33.3%（天国32.9% + 超天国0.4%）で、128G以内BONUS当選濃厚となる。
- 有利区間移行時のOPランク振り分けはランク1 50.0% / 2 20.0% / 3 4.2% / 4 25.0% / 5 0.8%。
- 約25%でOPランク4、0.8%で最上位ランク5から開始。
- 設定変更時の約6.7%で「OP203」から開始する公開解析が複数で一致。
- 有利区間移行1G目にレア役を引いた場合はモードが強く優遇される。

### resetPenalties
- 前日の内部ゲーム数 / 天井進行、モード、内部状態、OPランクを失う。
- 前日の深いハマりや高モード・高OPランク等の有利な内部状況を引き継げないことが主な機会損失。
- 設定変更専用の追加ペナルティ抽選は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 設定変更後・据え置き/純電断後はいずれも朝一「現代」ステージ開始で、開始ステージ単独では判別不可。
- 有利区間ランプによる設定変更/据え置き判別は不可とする高信頼解析が一致。
- 設定変更時は天井・モードが再抽選される一方、据え置きでは内部ゲーム数・モードを引き継ぐため、前日ゲーム数と当日の規定G前兆位置を組み合わせた補助推測は可能。ただし単独の確定判別にはしない。
- 本機固有のリールガックン条件/発生率は `パチスロ幼女戦記 / Sパチスロ幼女戦記ZR / S幼女戦記 / Sammy / サミー / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電断 / ガックン / リールガックン` を組み替え、業界記事・当時解析・古いDB・回顧資料まで再探索したが直接固定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- 設定変更時モード（その他成立）: 通常A 50.0% / 通常B 16.7% / 天国 32.9% / 超天国 0.4%。
- 設定変更時モード（スイカ / 弱チェリー / 勲章揃い）: 通常B 50.0% / 天国 49.2% / 超天国 0.8%。
- 設定変更時モード（チャンスチェリー / チャンス目）: 天国 83.3% / 超天国 16.7%。
- 通常成立時の天国以上合計: 33.3%。
- 有利区間移行時OPランク: 1=50.0% / 2=20.0% / 3=4.2% / 4=25.0% / 5=0.8%。
- 設定変更時OP203開始: 約6.7%。
- モード天井: 通常A 512G+α / 通常B 384G+α / 天国 128G+α / 超天国 128G+α。

### publicMorningNumbers
- 朝一設定変更後、通常成立役でも天国以上: 33.3%。
- 朝一設定変更後、弱レア役等成立なら天国以上: 50.0%。
- 朝一設定変更後、強レア役なら天国以上: 100%。
- 初期OPランク4: 25.0%。
- 初期OPランク5: 0.8%。
- OP203スタート: 約6.7%。
- 天国 / 超天国天井: 128G+α。

### resetBehavior 再探索メモ
- 取得/再探索日: 2026-09-13。
- `パチスロ幼女戦記 / Sパチスロ幼女戦記ZR / S幼女戦記 / 幼女戦記スロット / Sammy / サミー / 2S0766` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電断 / 天井 / 天井短縮 / モード / モード振り分け / 状態 / OPランク / OP203 / ガックン / 有利区間 / 判別` を組み替えて再探索。
- サミー発表、遊技日本、PiDEA、公的検定情報を転載する業界資料、SUNTAC、P-WORLD、HAZUSE、なな徹、一撃、必勝本、スロパチクエスト、当時系二次解析を横断。
- 高信頼解析で設定変更時の有利区間・天井・モード・内部状態・OPランクRESETと、純電断時のCARRY_OVERが一致。
- 一部近年集約サイトに「設定変更でも天井・内部モード引継ぎ」とする記述があるが、その引用元を確認すると一次/高信頼解析はRESETで一致するため、当該集約記述は `CONFLICT_AGGREGATOR_TRANSCRIPTION_NOT_ADOPTED` とした。
- ガックンは十分な再探索後も本機固有の直接根拠を固定できなかった。

## release / identity notes
- サミーは2022-09-12に本機を発表。当初業界発表では11月上旬導入予定だった。
- その後スケジュール変更があり、実導入は2022-12-05でサミー公式動画・SUNTAC実導入速報・複数解析が一致。
- 旧予定2022-11-07表記は `RELEASE_SCHEDULE_CHANGED` とし、canonical releaseDateは2022-12-05。
- 型式 `Sパチスロ幼女戦記 ZR`、検定番号 `2S0766` は東京都公安委員会検定通過情報を掲載するPiDEAとHAZUSEで一致。

## conflicts
- リセット挙動: 一部近年集約サイトに「設定変更でも天井・内部モード引継ぎ」記述あり。しかしHAZUSE・なな徹等の高信頼解析は設定変更時RESETで一致。`CONFLICT_AGGREGATOR_TRANSCRIPTION_NOT_ADOPTED`。
- 設定L機械割: 複数二次解析は82.7%。なな徹・必勝本等の高信頼解析では公表値未掲載/調査中。82.7%を `ANALYSIS_MULTI_SECONDARY_NOT_HIGH_SOURCE_CONFIRMED` として保持し、通常設定と同じ信頼度にはしない。
- 超天国ループ率: 「80%over」と「約83%」の表現差。平均せず、公式/高信頼寄りの80%overを主表現、約83%を解析上の補足値として保持。

## missingFields
- 設定LのBONUS合算 / AT初当たり: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 本機固有リールガックン条件 / 発生率: `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更専用の追加ペナルティ抽選: `NONE_CONFIRMED_AFTER_RESEARCH`。

## sources
取得日: 2026-09-13

### OFFICIAL / INDUSTRY / PUBLIC
1. サミー公式チャンネル「パチスロ幼女戦記」最速解説動画 — 2022-12-05順次導入、ゲーム性/AT基本性能
   - https://www.youtube.com/watch?v=28HcVZDHH54
2. 遊技日本 — サミー新機種発表、型式名、BONUS/AT、純増
   - https://yugi-nippon.com/pachinko-new-machine/post-53840/
3. PiDEA — 東京都公安委員会2022-08-22検定通過、型式 `Sパチスロ幼女戦記 ZR` / 検定番号 `2S0766`
   - https://www.pidea.jp/articles/1661140582
4. SUNTAC — 2022-12-05導入3パチスロのTRYSEM速報、`S パチスロ幼女戦記 ZR`
   - https://suntac.jp/market/post3217/
5. P-BOMB — サミー発表時の基本値、当初11月上旬導入予定
   - https://p-bomb.co.jp/industry/new-machine/5197/

### ANALYSIS_HIGH
6. HAZUSE 基本スペック
   - https://hazuse.com/machine/pachislot/2S0766/genre/201/
7. HAZUSE 天井・設定変更
   - https://hazuse.com/machine/pachislot/2S0766/genre/207/
8. なな徹 機種総合 / 朝一・設定変更
   - https://nana-press.com/kaiseki/machine/447/
   - https://nana-press.com/kaiseki/machine/447/12714/
9. なな徹 BONUS/AT・機械割
   - https://nana-press.com/kaiseki/machine/447/11621/
10. P-WORLD 機種DB / 設定変更時モード移行率
   - https://www.p-world.co.jp/machine/database/9719
11. 一撃 機種総合
   - https://1geki.jp/slot/s_yojo_senki/
12. パチ＆スロ必勝本 基本スペック
   - https://p.hisshobon.jp/machine/3992/1/91008
13. スロパチクエスト 天井・有利区間関連
   - https://www.slopachi-quest.com/article/youjyosenki-tenjou/

### SECONDARY / CONFLICT CHECK
14. やんちゃプレス — 設定L 82.7%、11/7予定→12/5延期の履歴
   - https://www.yancha-press.com/26879/
15. スロパチクエスト 設定差まとめ — 設定L 82.7%
   - https://www.slopachi-quest.com/article/youjyosenki-settei/

## quality
coreStatus: COMPLETE_CORE
resetBehaviorQA: COMPLETE_RESET_CORE_WITH_PUBLIC_MODE_TABLE_OP_RANK_AND_OP203_START_RATE
confidence:
- identity: INDUSTRY/PUBLIC_HIGH
- core: HIGH
- reset core: HIGH
- numeric morning/reset: HIGH
- settingL payout: ANALYSIS_MULTI_SECONDARY_NOT_HIGH_SOURCE_CONFIRMED
- gackun: UNVERIFIED_AFTER_RESEARCH
